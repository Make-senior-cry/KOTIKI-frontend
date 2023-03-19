import Avatar from './Avatar/Avatar';

function UserItem({ user }) {
  return (
    <div className="container d-flex justify-content-start align-items-center">
      <Avatar size="small" src={user.imageURL} />
      <span className="ms-4">{user.name}</span>
      <span className="ms-5">{user.description}</span>
    </div>
  );
}

export default UserItem;
