import Avatar from '../Avatar/Avatar';

function PostTitle({ avatar, authorName, createdAt }) {
  return (
    <div className="card-title d-flex justify-content-between align-items-center">
      <Avatar src={avatar} size="small" />
      <span>{ authorName }</span>
      <span>{ createdAt }</span>
    </div>
  );
}

export default PostTitle;
