import { Link as ReactRouterLink } from 'react-router-dom';
import cn from 'classnames';

export default function Link({ href, disableUnderline, children }) {
  return (
    <ReactRouterLink to={href} className={cn('link-primary', disableUnderline && 'text-decoration-none')}>{children}</ReactRouterLink>
  );
}
