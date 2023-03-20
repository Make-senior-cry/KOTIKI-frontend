import { useId } from 'react';

function Input(
  {
    label = '', textarea = false, value, onChange, ...attributes
  },
) {
  const id = useId();

  const inp = (
    textarea
      ? (
        <textarea
          value={value}
          placeholder={attributes.placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="form-control"
          required={attributes.required}
          id={id}
        />
      )
      : (
        <input
          type={attributes.type}
          value={value}
          placeholder={attributes.placeholder}
          className="form-control"
          onChange={(event) => onChange(event.target.value)}
          required={attributes.required}
          id={id}
        />
      )
  );

  return (
    <div>
      {
        label
          ? (
            <label className="form-label" htmlFor={id}>
              {' '}
              { label }
              {' '}
            </label>
          )
          : null
      }
      { inp }
    </div>
  );
}

export default Input;
