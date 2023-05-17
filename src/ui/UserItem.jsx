import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar/Avatar';

function UserItem({ user }) {
  const navigate = useNavigate();

  const handleClickItem = () => navigate(user.link);

  return (
    <div role="link" onClick={handleClickItem} className="d-flex align-items-center">
      <Avatar size="small" src={user.imageUrl} />
      <strong className="ms-2">{user.name}</strong>
      <span className="ms-4 text-muted">{user.description }</span>
    </div>
  );
}

export default UserItem;
