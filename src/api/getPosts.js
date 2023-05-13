import httpClient from './httpClient';
import PostRecord from '../entities/postRecord';
import Pagination from '../entities/pagination';

const getPosts = (userId, skip = 0, limit = 10) => httpClient
  .get('/post', {
    params: {
      user_id: userId,
      skip,
      limit,
    },
  })
  .then((response) => {
    const {
      // eslint-disable-next-line no-unused-vars
      posts, author, hasPrev, hasNext, skip, limit,
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

export default getPosts;
