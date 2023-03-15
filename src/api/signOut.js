import httpClient from './httpClient';

const signOut = () => httpClient.post('/auth/sign-out');

export default signOut;
