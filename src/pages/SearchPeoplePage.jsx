import { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import UserItemList from '../ui/UserItemList';
import useSearchValue from '../hooks/useSearchValue';
import searchUsers from '../api/searchUsers';
import DefaultLayout from '../ui/DefaultLayout';

export default function SearchPeoplePage() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchValue, setSearchValue] = useSearchValue();

  useEffect(() => {
    searchUsers(searchValue, 0, 10)
      .then((response) => setUsers(response.dataList))
      .catch((error) => setErrorMessage(error.message));
  }, [searchValue]);

  return (
    <DefaultLayout
      hero={<SearchForm onSearchUsers={setSearchValue} searchValue={searchValue} />}
      errorMessage={errorMessage}
    >
      <UserItemList users={users} />
    </DefaultLayout>
  );
}
