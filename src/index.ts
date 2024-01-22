import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./infrastructure/graphql/typeDefs";
import { resolvers } from "./infrastructure/graphql/resolvers";
import { DataSourceRepository } from "./infrastructure/dataSource/dataSource";
import { GithubUseCase } from "./application/useCases";

const startServer = async () => {
  return new Promise(async (resolve, reject) => {
    const dataSourceRepository = new DataSourceRepository();
    const useCases = GithubUseCase.create(dataSourceRepository);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    try {
      const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async () => {
          return {
            useCases,
          };
        },
      });

      console.log(`🚀  Server ready at: ${url}`);
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};

startServer()
  .then((url) => {})
  .catch((error) => {
    console.error("Error starting the server:", error);
  });
