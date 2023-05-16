import { Link as ReactRouterLink } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

function PostTitle({
  avatar, authorName, createdAt, authorLink,
}) {
  return (
    <div className="card-title d-flex gap-2 align-items-center mb-4">
      <ReactRouterLink
        to={authorLink}
        className="d-flex gap-2 align-items-center text-black text-decoration-none"
      >
        <Avatar src={avatar} size="small" />
        <span>{ authorName }</span>
      </ReactRouterLink>
      <span>{ createdAt }</span>
    </div>
  );
}

export default PostTitle;
