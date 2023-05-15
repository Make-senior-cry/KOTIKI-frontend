import httpClient from './httpClient';
import User from '../entities/user';
import getImageSource from '../utils/getImageSource';

const getAuthorizedUser = () => httpClient
  .get('/user')
  .then((response) => {
    const userData = response.data;
    userData.imageURL = getImageSource(response.data.imageUrl);
    return new User(userData);
  });

export default getAuthorizedUser;
