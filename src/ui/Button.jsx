function Button({ onClick, variant = 'primary', children }) {
  return <button onClick={onClick} type="button" className={`btn btn-${variant}`}>{children}</button>;
}

export default Button;
