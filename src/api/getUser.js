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
    const user = response.data;
    user.imageURL = getImageSource(response.data.imageURL);
    return new User(response.data);
  });

export default getUser;
