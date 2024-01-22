import { GithubRepositoryInterface } from "../../domain/interfaces/repository";
import { GithubRepositoryEntity } from "../../domain/entities/repository";

const newEntity = new GithubRepositoryEntity();
newEntity.title = 1;
newEntity.author = "github-repository-1";

export class DataSourceRepository implements GithubRepositoryInterface {
  async getAll(): Promise<GithubRepositoryEntity[] | Error> {
    try {
      const repositories: GithubRepositoryEntity[] = [newEntity];
      return repositories;
    } catch (error) {
      return new Error("Error");
    }
  }

  async searchByOwnerName(
    keyword: string
  ): Promise<GithubRepositoryEntity[] | Error> {
    try {
      const repositories: GithubRepositoryEntity[] = [newEntity];
      return repositories;
    } catch (error) {
      return new Error("Error");
    }
  }
}
