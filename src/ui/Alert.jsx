import cn from 'classnames';

export default function Alert(props) {
  const {
    children, type, className, ...alertProps
  } = props;

  return (
    <div
      className={cn(`alert alert-${type}`, className)}
      role="alert"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...alertProps}
    >
      {children}
    </div>
  );
}
