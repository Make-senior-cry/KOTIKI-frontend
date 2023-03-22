function Button({ variant = 'primary', type = 'button', ...buttonProps }) {
  // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
  return <button className={`w-100 btn btn-${variant}`} type={type} {...buttonProps} />;
}

export default Button;
