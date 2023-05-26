import httpClient from './httpClient';

const sendMessage = (text, senderId, receiverId) => httpClient
  .post('/msg', {
    text,
    senderId,
    receiverId,
  });

export default sendMessage;
