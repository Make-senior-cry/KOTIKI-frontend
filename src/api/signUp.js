import User from '../entities/user';
import httpClient from './httpClient';

const signUp = (name, email, password) => httpClient
  .post('/auth/sign-up', {
    name,
    email,
    password,
  })
  .then((response) => new User(response.data));

export default signUp;
