import cn from 'classnames';
import { useState } from 'react';

function Form(
  {
    label = '', textarea, placeholder, type = 'text',
  },
) {
  const [value, setValue] = useState('');

  if (textarea) {
    if (label) {
      return (
        <div>
          <label className={cn('form-label')}>
            { label }
            <textarea
              value={value}
              placeholder={placeholder}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
        </div>
      );
    }
    return (
      <div>
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    );
  }
  if (label) {
    return (
      <div>
        <label className={cn('form-label')}>
          {label}
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={cn('form-control')}
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      </div>
    );
  }
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={cn('form-control')}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default Form;
