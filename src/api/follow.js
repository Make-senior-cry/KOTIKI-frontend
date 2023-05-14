import httpClient from './httpClient';

const follow = (followingId) => httpClient
  .post('/user/follow', {
    id: followingId,
  })
  .then((response) => {
    console.log(response);
  });

export default follow;
