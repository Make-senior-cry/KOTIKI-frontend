import httpClient from './httpClient';

const isFollowedByCurrentUser = (id) => httpClient
  .get('/user/following', {
    params: {
      id,
    },
  })
  .then((response) => response.data.isFollower);

export default isFollowedByCurrentUser;
