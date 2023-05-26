import Message from './Message';

function MessagesList({ messages }) {
  const messagesList = messages.map((msg) => (
    <li className="list-group-item" key={msg.id}>
      <Message message={msg} />
    </li>
  ));
  return (
    <div>
      <ul className="list-group">{messagesList}</ul>
    </div>
  );
}

export default MessagesList;
