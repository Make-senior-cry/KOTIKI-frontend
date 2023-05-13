import httpClient from './httpClient';
import User from '../entities/user';
import Pagination from '../entities/pagination';

const searchUsers = (name, skip, limit) => httpClient.get('/search/user', { params: { name, skip, limit } }).then((response) => {
  const {
    users, hasPrev, hasNext, skip, limit,
  } = response.data;
  const foundUsers = users.map((userData) => new User(userData));

  return new Pagination({
    dataList: foundUsers,
    hasPrev,
    hasNext,
    skip,
    limit,
  });
});

export default searchUsers;
