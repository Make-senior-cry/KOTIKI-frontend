import Avatar from '../Avatar/Avatar';

function PostTitle({ avatar, authorName, createdAt }) {
  return (
    <div className="card-title d-flex gap-2 align-items-center mb-4">
      <Avatar src={avatar} size="small" />
      <span>{ authorName }</span>
      <span>{ createdAt }</span>
    </div>
  );
}

export default PostTitle;
