import Avatar from './Avatar/Avatar';

function UserItem({ user, onClick }) {
  return (
    <div className="container d-flex justify-content-start align-items-center text-primary border rounded p-2" onClick={onClick}>
      <div className="ms-2">
        <Avatar size="small" src={user.imageURL} />
      </div>
      <strong className="ms-4">{user.name}</strong>
      <span className="ms-5">{user.description}</span>
    </div>
  );
}

export default UserItem;
