import { GithubRepositoryInterface } from "../domain/interfaces/repository";
import { GithubRepositoryEntity } from "../domain/entities/repository";
export class GithubUseCase {
  constructor(private githubRepository: GithubRepositoryInterface) {}

  static create(githubRepository: GithubRepositoryInterface): GithubUseCase {
    return new GithubUseCase(githubRepository);
  }

  async listAllRepositories(): Promise<GithubRepositoryEntity[]> {
    return this.githubRepository.getAll();
  }

  async searchRepositoriesByName(
    keyword: string
  ): Promise<GithubRepositoryEntity[]> {
    return this.githubRepository.searchByName(keyword);
  }
}
