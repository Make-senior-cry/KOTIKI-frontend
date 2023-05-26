import { useEffect, useState } from 'react';
import DefaultLayout from '../ui/DefaultLayout';
import MessagesList from '../ui/MessagesList';
import Input from '../ui/Input';
import * as API from '../api';
import userStore from '../store/userStore';
import Button from '../ui/Button';

function ChatPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);

  function getMessages() {
    console.log('get msgs');
    API.subscribeToChat(userStore.user.id)
      .then((response) => {
        console.log(response);
        setMessages(response);
      });
  }

  useEffect(() => {
    getMessages();
  }, []);

  function sendMessage(e) {
    e.preventDefault();
    console.log(msg);
    API.sendMessage(msg, userStore.user.id, userStore.user.id)
      .catch((error) => { setErrorMessage(error.message); });
  }

  return (
    <DefaultLayout errorMessage={errorMessage}>
      <MessagesList messages={messages} />
      <div>
        <form onSubmit={sendMessage}>
          <Input
            placeholder="Отправить сообщение"
            value={msg}
            onChange={(e) => { setMsg(e.target.value); }}
          />
          <Button type="submit">Отправить сообщение</Button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default ChatPage;
