import { GithubRepositoryEntity } from "../entities/repository";

export interface GithubRepositoryInterface {
  getAll(): Promise<[GithubRepositoryEntity[], Error]>;
  searchByName(keyword: string): Promise<[GithubRepositoryEntity[], Error]>;
}
