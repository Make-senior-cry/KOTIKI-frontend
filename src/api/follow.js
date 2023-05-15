import httpClient from './httpClient';

const follow = (followingId) => httpClient
  .post('/user/follow', {
    followingId,
  })
  .then((response) => response.data);

export default follow;
