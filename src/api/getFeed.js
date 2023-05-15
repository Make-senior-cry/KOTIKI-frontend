import httpClient from './httpClient';
import PostRecord from '../entities/postRecord';
import Pagination from '../entities/pagination';

const getFeed = (type, skip = 0, limit = 10) => httpClient
  .get('/feed', { params: { type, skip, limit } })
  .then((response) => {
    const {
      posts, hasPrev, hasNext, skip, limit,
    } = response.data;
    const foundPosts = posts.map((postData) => new PostRecord(postData));
    return new Pagination({
      dataList: foundPosts,
      hasPrev,
      hasNext,
      skip,
      limit,
    });
  });

export default getFeed;
