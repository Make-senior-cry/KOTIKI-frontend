import httpClient from './httpClient';

const likePost = (postId) => httpClient.post('/post/like', { postId }).then((response) => response.data);

export default likePost;
