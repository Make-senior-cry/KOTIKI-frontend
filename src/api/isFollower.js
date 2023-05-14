import httpClient from './httpClient';

const isFollower = (followingId) => httpClient
  .get('/user/isFollower', {
    params: {
      followingId,
    },
  })
  .then((response) => response.data);

export default isFollower;
