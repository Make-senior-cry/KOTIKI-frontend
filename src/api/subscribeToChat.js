import httpClient from './httpClient';

const subscribeToChat = (senderId) => httpClient
  .get('/msg/sub', {
    params: {
      senderId,
    },
    'Content-Type': 'TEXT_EVENT_STREAM_VALUE',
  })
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .finally(() => {
    console.log(1);
  });

export default subscribeToChat;
