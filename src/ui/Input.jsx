import cn from 'classnames';
import { useState } from 'react';

function Input(
  {
    label = '', textarea = false, placeholder, type = 'text', required = false,
  },
) {
  const [value, setValue] = useState('');

  const inp = (
    textarea
      ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(event) => setValue(event.target.value)}
          className={cn('form-control')}
          required={required}
        />
      )
      : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={cn('form-control')}
          onChange={(event) => setValue(event.target.value)}
          required={required}
        />
      )
  );

  if (label) {
    return (
      <div>
        <label className="form-label">
          { label }
          { inp }
        </label>
      </div>
    );
  }
  return (
    <div>
      { inp }
    </div>
  );
}

export default Input;
