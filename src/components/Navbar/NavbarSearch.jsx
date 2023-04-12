import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';

export default function NavbarSearch() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  function onKeyDownEnter(event) {
    if (event.key === 'Enter') {
      navigate(`/search?query=${searchQuery}`);
    }
  }

  return (
    <Input
      placeholder="Поиск"
      onKeyDown={onKeyDownEnter}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
