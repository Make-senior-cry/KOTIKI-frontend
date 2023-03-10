import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.API_URL,
});

export default httpClient;
