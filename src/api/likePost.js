import httpClient from "./httpClient";

const likePost = (postId) =>
  httpClient.post("/like-post", { postId }).then((response) => response.data);

export default likePost;
