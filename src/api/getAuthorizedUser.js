import httpClient from './httpClient';
import User from '../entities/user';

const getAuthorizedUser = () => httpClient
  .get('/user')
  .then((response) => {
    const userData = response.data;
    userData.imageURL = response.data.imageUrl;
    return new User(userData);
  });

export default getAuthorizedUser;
