import httpClient from './httpClient';

const isFollower = (followingId) => httpClient
  .get('/user/isFollower', {
    params: {
      id: followingId,
    },
  })
  .then((response) => response.data);

export default isFollower;
