export default class User {
  constructor({
    id,
    name,
    imageURL,
    description,
    email,
    role,
    followersCount,
    followingCount,
    postsCount,
  }) {
    this.id = id;
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    this.email = email;
    this.role = role;
    this.followersCount = followersCount;
    this.followingCount = followingCount;
    this.postsCount = postsCount;
  }
}
