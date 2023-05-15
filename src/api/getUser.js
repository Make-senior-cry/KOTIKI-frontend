import httpClient from './httpClient';
import User from '../entities/user';
import getImageSource from '../utils/getImageSource';

const getUser = (userId) => httpClient
  .get('/user', {
    params: {
      id: userId,
    },
  })
  .then((response) => {
    const userData = response.data;
    userData.imageURL = getImageSource(response.data.imageUrl);
    return new User(userData);
  });

export default getUser;
