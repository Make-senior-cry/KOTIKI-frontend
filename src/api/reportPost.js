import httpClient from './httpClient';

const reportPost = (postId) => httpClient.post('/post/report', { postId }).then((response) => response.data);

export default reportPost;
