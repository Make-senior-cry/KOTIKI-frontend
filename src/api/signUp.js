import User from '../entities/user';
import httpClient from './httpClient';

const signUp = (email, password, name) => httpClient
  .post('/auth/sign-up', {
    name,
    email,
    password,
  })
  .then((response) => new User(response.data));

export default signUp;
