export class User {
  firstName: string;
  location?: string;
  following?: number;
  followers?: number;
  noOfRepositories?: number;
  htmlUrl?: string;
  avtar?: string;

  constructor(
    firstName: string,
    following?: number,
    followers?: number,
    noOfRepositories?: number,
    htmlUrl?: string,
    location?: string,
    avtar?: string
  ) {
    this.firstName = firstName;
    this.location = location;
    this.following = following;
    this.followers = followers;
    this.noOfRepositories = noOfRepositories;
    this.htmlUrl = htmlUrl;
    this.avtar = avtar;
  }
}
