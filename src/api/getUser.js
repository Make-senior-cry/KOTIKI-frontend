import httpClient from './httpClient';
import User from '../entities/user';

const getUser = (userId) => httpClient
  .get('/user', {
    params: {
      id: userId,
    },
  })
  .then((response) => {
    const userData = response.data;
    userData.imageURL = response.data.imageUrl;
    return new User(userData);
  });

export default getUser;
