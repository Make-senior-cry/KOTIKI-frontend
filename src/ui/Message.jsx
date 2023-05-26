function Message({ message }) {
  return (
    <div className="card">
      <div className="card-body">
        {message.text}
      </div>
    </div>
  );
}

export default Message;
