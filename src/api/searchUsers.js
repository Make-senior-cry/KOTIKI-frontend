import httpClient from './httpClient';
import User from '../entities/user';
import Pagination from '../entities/pagination';

const searchUsers = (name) => httpClient.get('/search-users', { params: { name } }).then((response) => {
  const {
    dataList, hasPrev, hasNext, skip, limit,
  } = response.data;
  const users = dataList.map((userData) => new User(userData));
  return new Pagination({
    dataList: users,
    hasPrev,
    hasNext,
    skip,
    limit,
  });
});

export default searchUsers;
