export const typeDefs = `#graphql

type License {
  key: String!
  name: String!
  spdx_id: String!
  url: String!
  node_id: String!
}

type Owner {
  login: String!
  id: ID!
  node_id: String!
  avatar_url: String!
  gravatar_id: String!
  url: String!
  html_url: String!
  followers_url: String!
  following_url: String!
  gists_url: String!
  starred_url: String!
  subscriptions_url: String!
  organizations_url: String!
  repos_url: String!
  events_url: String!
  received_events_url: String!
  type: String!
  site_admin: Boolean!
}

type Repository {
  id: ID!
  name: String!
  full_name: String!
  private: Boolean!
  owner: Owner!
  html_url: String!
  description: String
  fork: Boolean!
  url: String!
  forks_url: String!
  keys_url: String!
  collaborators_url: String!
  teams_url: String!
  hooks_url: String!
  issue_events_url: String!
  events_url: String!
  assignees_url: String!
  branches_url: String!
  tags_url: String!
  blobs_url: String!
  git_tags_url: String!
  git_refs_url: String!
  trees_url: String!
  statuses_url: String!
  languages_url: String!
  stargazers_url: String!
  contributors_url: String!
  subscribers_url: String!
  subscription_url: String!
  commits_url: String!
  git_commits_url: String!
  comments_url: String!
  issue_comment_url: String!
  contents_url: String!
  compare_url: String!
  merges_url: String!
  archive_url: String!
  downloads_url: String!
  issues_url: String!
  pulls_url: String!
  milestones_url: String!
  notifications_url: String!
  labels_url: String!
  releases_url: String!
  deployments_url: String!
  created_at: String!
  updated_at: String!
  pushed_at: String!
  git_url: String!
  ssh_url: String!
  clone_url: String!
  svn_url: String!
  homepage: String
  size: Int!
  stargazers_count: Int!
  watchers_count: Int!
  language: String!
  has_issues: Boolean!
  has_projects: Boolean!
  has_downloads: Boolean!
  has_wiki: Boolean!
  has_pages: Boolean!
  has_discussions: Boolean!
  forks_count: Int!
  mirror_url: String
  archived: Boolean!
  disabled: Boolean!
  open_issues_count: Int!
  license: License 
  allow_forking: Boolean!
  is_template: Boolean!
  web_commit_signoff_required: Boolean!
  topics: [String!]
  visibility: String!
  forks: Int!
  open_issues: Int!
  watchers: Int!
  default_branch: String!
}

type Query {
  GetRepositories(
    username: String!
    page: Int = 1
    per_page: Int = 10
    mostPopularFirst: Boolean = false
  ): [Repository]!}
`;
