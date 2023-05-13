import { useSearchParams } from 'react-router-dom';

export default function useSearchValue() {
  const [params, setParams] = useSearchParams();
  const searchValue = params.get('name') ? params.get('name') : '';

  function setSearchValue(name) {
    const updatedParams = new URLSearchParams(params);
    updatedParams.set('name', name);
    setParams(updatedParams);
  }

  return [searchValue, setSearchValue];
}
