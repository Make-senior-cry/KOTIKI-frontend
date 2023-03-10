import httpClient from "./httpClient";

const reportPost = (postId) =>
  httpClient.post("/report-post", { postId }).then((response) => response.data);

export default banPost;
