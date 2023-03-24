import axios from 'axios';
import config from '../config/config';

const httpClient = axios.create({
  baseURL: config.API_URL,
  withCredentials: config.withCredentials,
});

export default httpClient;
