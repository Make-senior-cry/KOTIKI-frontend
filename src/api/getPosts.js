import httpClient from './httpClient';
import PostRecord from '../entities/postRecord';
import Pagination from '../entities/pagination';
import config from '../config/config';

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
      posts, author, hasPrev, hasNext, skip, limit,
    } = response.data;

    let foundPosts;
    if (config.DEV) {
      const postExample = new PostRecord({
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        createdAt: new Date(),
        banned: false,
        likesCount: 2,
        reportsCount: 0,
        author,
      });
      const postExample2 = JSON.parse(JSON.stringify(postExample));
      postExample2.id = 2;
      foundPosts = [postExample, postExample2, ...posts];
    } else {
      foundPosts = posts.map((postData) => {
        const post = new PostRecord(postData);
        post.author = author;
        return post;
      });
    }

    return new Pagination({
      dataList: foundPosts,
      hasPrev,
      hasNext,
      skip,
      limit,
    });
  });

export default getPosts;
