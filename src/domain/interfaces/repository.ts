import { GithubRepositoryEntity } from "../entities/repository";

export interface GithubRepositoryInterface {
  getAll(): Promise<GithubRepositoryEntity[]>;
  searchByName(keyword: string): Promise<GithubRepositoryEntity[]>;
}
