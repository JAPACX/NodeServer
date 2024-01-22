import { GithubRepositoryInterface } from "../domain/interfaces/repository";
import { GithubRepositoryEntity } from "../domain/entities/repository";
export class GithubUseCase {
  constructor(private githubRepository: GithubRepositoryInterface) {}

  static create(githubRepository: GithubRepositoryInterface): GithubUseCase {
    return new GithubUseCase(githubRepository);
  }

  async listAllRepositories(): Promise<GithubRepositoryEntity[] | Error> {
    return this.githubRepository.getAll();
  }

  async searchRepositoriesByName(
    keyword: string
  ): Promise<GithubRepositoryEntity[] | Error> {
    if (!keyword) {
      throw new Error("Search keyword is required.");
    }
    return this.githubRepository.searchByOwnerName(keyword);
  }
}
