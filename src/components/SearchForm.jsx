import { useEffect, useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function SearchForm({ onSearchUsers, searchValue }) {
  const [value, setValue] = useState(searchValue);

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  function handleSearchPeople(event) {
    event.preventDefault();
    onSearchUsers(value);
  }

  return (
    <form onSubmit={handleSearchPeople} className="row g-3">
      <div className="col-auto">
        <Input
          placeholder="Имя или email"
          type="text"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <Button type="submit">Найти</Button>
      </div>
    </form>
  );
}
