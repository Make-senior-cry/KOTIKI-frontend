import httpClient from './httpClient';
import User from '../entities/user';

const getUser = (userId) => httpClient
  .get('/user', {
    params: {
      id: userId,
    },
  })
  .then((response) => new User(response.data));

export default getUser;
