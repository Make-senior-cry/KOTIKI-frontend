import httpClient from './httpClient';

const follow = (followingId) => httpClient
  .post('/user/follow', {
    followingId,
  })
  .then((response) => {
    console.log(response);
  });

export default follow;
