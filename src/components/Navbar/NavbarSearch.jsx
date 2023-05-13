import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import useSearchValue from '../../hooks/useSearchValue';

export default function NavbarSearch() {
  const navigate = useNavigate();
  const [searchValue] = useSearchValue();
  const [currentSearchValue, setCurrentSearchValue] = useState(searchValue);

  function onKeyDownEnter(event) {
    if (event.key === 'Enter') {
      navigate(`/search/user?name=${currentSearchValue}`);
    }
  }

  return (
    <Input
      placeholder="Поиск"
      onKeyDown={onKeyDownEnter}
      value={currentSearchValue}
      onChange={(e) => setCurrentSearchValue(e.target.value)}
    />
  );
}
