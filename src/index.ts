import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./infrastructure/graphql/typeDefs";
import { resolvers } from "./infrastructure/graphql/resolvers";
import { DataSourceRepository } from "./infrastructure/dataSource/dataSource";
import { GithubUseCase } from "./application/usesCases";

const dataSourceRepository = new DataSourceRepository();

const useCases = GithubUseCase.create(dataSourceRepository);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      useCases,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
