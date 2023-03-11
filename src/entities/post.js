export default class Post {
  constructor({
    id,
    text,
    imageURL,
    createdAt,
    banned,
    likesCount,
    reportsCount,
    author,
  }) {
    this.id = id;
    this.text = text;
    this.imageURL = imageURL;
    this.createdAt = createdAt;
    this.banned = banned;
    this.likesCount = likesCount;
    this.reportsCount = reportsCount;
    this.author = author;
  }
}
