import httpClient from "./httpClient";
import User from "../entities/user";

const getUser = () =>
  httpClient.get("/get-user").then((response) => new User(response.data));

export default getUser;
