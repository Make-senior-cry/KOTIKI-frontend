import UserItem from './UserItem';

export default function UserItemList({ users }) {
  const listItems = users.map((userItem) => (
    <li className="list-group-item" key={userItem.id}>
      <UserItem user={userItem} />
    </li>
  ));

  return (
    <div>
      <ul className="list-group">{listItems}</ul>
    </div>
  );
}
