import httpClient from './httpClient';
import PostRecord from '../entities/postRecord';
import Pagination from '../entities/pagination';
import config from '../config/config';

const getPosts = (userId, skip = 0, limit = 10) => {
  if (config.FAKE_POSTS) {
    const postExample = new PostRecord({
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
      createdAt: new Date(),
      banned: false,
      likesCount: 2,
      reportsCount: 0,
      author: {
        id: 1,
        name: 'Stupid Bastard',
        imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        description: 'bla bla bla',
        email: 'user@mail.ru',
        role: 'user',
        followersCount: 10,
        followingCount: 56,
        postsCount: 32,
      },
    });
    const postExample2 = JSON.parse(JSON.stringify(postExample));
    postExample2.id = 2;
    const foundPosts = [postExample, postExample2];
    return new Pagination({
      dataList: foundPosts,
      hasPrev: false,
      hasNext: false,
      skip,
      limit,
    });
  }
  return httpClient
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

      const foundPosts = posts.map((postData) => {
        const post = new PostRecord({ ...postData, author });
        return post;
      });
      return new Pagination({
        dataList: foundPosts,
        hasPrev,
        hasNext,
        skip,
        limit,
      });
    });
};

export default getPosts;
