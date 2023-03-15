import User from '../entities/user';
import httpClient from './httpClient';

const signIn = (email, password) => httpClient
  .post('/auth/sign-in', {
    email,
    password,
  })
  .then((response) => new User(response.data));

export default signIn;
