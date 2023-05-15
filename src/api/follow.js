import httpClient from './httpClient';
import User from '../entities/user';

const follow = (followingId) => httpClient
  .post('/user/follow', {
    followingId,
  })
  .then((response) => new User(response.data));

export default follow;
