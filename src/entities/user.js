import getImageSource from '../utils/getImageSource';

export default class User {
  constructor({
    id,
    name,
    imageUrl,
    description,
    email,
    role,
    followersCount,
    followingCount,
    postsCount,
  }) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl ? getImageSource(imageUrl) : imageUrl;
    this.description = description || '';
    this.email = email;
    this.role = role;
    this.followersCount = followersCount;
    this.followingCount = followingCount;
    this.postsCount = postsCount;
  }

  get link() {
    return `/user/${this.id}`;
  }
}

export const fakeUser = new User({
  id: 0,
  name: 'Fake',
  imageUrl: 'https://i1.sndcdn.com/avatars-000306703239-2lpxao-t500x500.jpg',
  description: 'A fake user',
  email: 'fake@fake.com',
  role: 'user',
  followersCount: 100,
  followingCount: 100,
  postsCount: 100,
});
