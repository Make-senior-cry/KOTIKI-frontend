import React, { useId } from 'react';

function Input(
  {
    label = '', textarea = false, className, ...inputProps
  },
) {
  const inputId = useId();
  const hasLabel = label.length > 0;

  return (
    <div className={className}>
      {hasLabel && <label className="form-label" htmlFor={inputId}>{label}</label>}
      {React.createElement(textarea ? 'textarea' : 'input', { className: 'form-control', id: inputId, ...inputProps })}
    </div>
  );
}

export default Input;
