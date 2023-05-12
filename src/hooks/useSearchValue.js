import { useSearchParams } from 'react-router-dom';
import { parseIntOrDefault } from './usePaginationParams';
import searchUsers from '../api/searchUsers';

export default function useSearchValue(setUsers) {
  const [params, setParams] = useSearchParams();
  const searchValue = params.get('name') ? params.get('name') : '';
  const skip = parseIntOrDefault(params.get('skip'), 0);
  const limit = parseIntOrDefault(params.get('limit'), 10);

  function setSearchValue(name) {
    const updatedParams = new URLSearchParams(params);
    updatedParams.set('name', name);
    setParams(updatedParams);

    searchUsers(name, skip, limit)
      .then((response) => {
        setUsers(response.dataList);
      });
  }

  return [searchValue, setSearchValue, setParams];
}
