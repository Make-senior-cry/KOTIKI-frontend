export default class PostRecord {
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

  get formattedDate() {
    const currentDate = this.createdAt;
    const d = [
      `0${currentDate.getDate()}`,
      `0${currentDate.getMonth() + 1}`,
      `${currentDate.getFullYear()}`,
      `0${currentDate.getHours()}`,
      `0${currentDate.getMinutes()}`,
    ].map((component) => component.slice(-2));
    return `${d.slice(3).join(':')} ${d.slice(0, 3).join('.')}`;
  }
}