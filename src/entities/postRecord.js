import getImageSource from '../utils/getImageSource';
import User from './user';

export default class PostRecord {
  constructor({
    id,
    text,
    imageUrl,
    createdAt,
    banned,
    likesCount,
    reportsCount,
    author,
    liked,
  }) {
    this.id = id;
    this.text = text;
    this.imageUrl = imageUrl ? getImageSource(imageUrl) : imageUrl;
    this.createdAt = createdAt;
    this.banned = banned;
    this.likesCount = likesCount;
    this.reportsCount = reportsCount;
    this.author = new User(author);
    this.liked = liked;
  }

  get formattedDate() {
    const currentDate = new Date(this.createdAt);
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
