import httpClient from './httpClient';
import User from '../entities/user';

const getAuthorizedUser = () => httpClient
  .get('/user')
  .then((response) => new User(response.data));

export default getAuthorizedUser;
