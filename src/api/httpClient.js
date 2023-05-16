import axios from 'axios';
import config from '../config/config';

const httpClient = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
});

httpClient.interceptors.response.use((response) => {
  console.log(response);
  if (response.status !== 200) {
    throw Error('Ошибка с запросом');
  }
  return response;
}, (error) => Promise.reject(error));

export default httpClient;
