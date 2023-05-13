import { useId } from 'react';

export default function SwitcherButton({ value, checked, onChange }) {
  const id = useId();

  return (
    <>
      <input
        id={id}
        type="radio"
        className="btn-check"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="btn btn-outline-primary" htmlFor={id}>{value}</label>
    </>
  );
}
