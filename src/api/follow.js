import httpClient from './httpClient';
import User from '../entities/user';

const follow = (followingId) => httpClient
  .post('/user/follow', {
    followingId,
  })
  .then((response) => {
    const userData = response.data;
    userData.imageURL = response.data.imageUrl;
    return new User(userData);
  });

export default follow;
