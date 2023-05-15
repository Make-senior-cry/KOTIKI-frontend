import httpClient from './httpClient';

const isFollower = (id) => httpClient
  .get('/user/following', {
    params: {
      id,
    },
  })
  .then((response) => response.data.isFollower);

export default isFollower;
