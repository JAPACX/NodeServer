import { GithubRepositoryEntity } from "../entities/repository";

export interface GithubRepositoryInterface {
  getAll(): Promise<GithubRepositoryEntity[] | Error>;
  searchByOwnerName(keyword: string): Promise<GithubRepositoryEntity[] | Error>;
}
