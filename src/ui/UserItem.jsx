import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar/Avatar';

function UserItem({ user }) {
  const navigate = useNavigate();

  const handleClickItem = () => navigate(user.link);

  return (
    <div role="link" onClick={handleClickItem} className="d-flex align-items-center">
      <Avatar size="small" src={user.imageURL} />
      <span className="ms-2 fw-bold">{user.name}</span>
      <span className="ms-4 text-muted">{user.description }</span>
    </div>
  );
}

export default UserItem;
