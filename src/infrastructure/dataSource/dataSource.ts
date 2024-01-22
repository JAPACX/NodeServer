import { GithubRepositoryInterface } from "../../domain/interfaces/repository";
import { GithubRepositoryEntity } from "../../domain/entities/repository";
import axios from "axios";

export class DataSourceRepository implements GithubRepositoryInterface {
  async getRepositories(): Promise<GithubRepositoryEntity[] | Error> {
    try {
      const response = await axios.get(
        "https://api.github.com/users/google/repos"
      );
      const repositories = response.data;

      return repositories;
    } catch (error) {
      console.error("Error fetching repositories:", error);
      throw new Error("Failed to fetch repositories");
    }
  }
}
