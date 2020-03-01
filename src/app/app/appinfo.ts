export class GitHubInfo {
  appInfo!: Appinfo[];
  constructor(data: Partial<GitHubInfo>) {
    Object.assign(this, data);
}

  public static fromJSON = (json: string): GitHubInfo => {
      const jsonObject = JSON.parse(json);
      return new GitHubInfo(jsonObject);
  };

}

export interface Appinfo {
  id: number;
  fullName: string;
  htmlUrl: string;
}
