import httpClient from "./httpClient";
import Post from "../entities/post";
import Pagination from "../entities/pagination";

const getPosts = (userId, skip = 0, limit = 10) =>
  httpClient
    .get("/get-posts", {
      paramas: {
        userId,
        skip,
        limit,
      },
    })
    .then((response) => {
      const { dataList, hasPrev, hasNext, skip, limit } = response.data;
      const posts = dataList.map((postData) => new Post(postData));
      return new Pagination({
        dataList: posts,
        hasPrev,
        hasNext,
        skip,
        limit,
      });
    });

export default getPosts;
