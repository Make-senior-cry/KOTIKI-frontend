import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import UserItemList from '../ui/UserItemList';
import Navbar from '../components/Navbar/Navbar';
import useSearchValue from '../hooks/useSearchValue';
import searchUsers from '../api/searchUsers';

export default function SearchPeoplePage() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useSearchValue();

  useEffect(() => {
    searchUsers(searchValue, 0, 10)
      .then((response) => {
        setUsers(response.dataList);
      });
  }, [searchValue]);

  return (
    <main className="container">
      <Navbar />
      <div className="container d-flex flex-column gap-3 pt-3">
        <SearchForm onSearchUsers={setSearchValue} searchValue={searchValue} />
        <UserItemList users={users} />
      </div>
    </main>
  );
}
