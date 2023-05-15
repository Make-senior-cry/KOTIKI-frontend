import httpClient from './httpClient';

const banPost = (postId) => httpClient.post('/post/ban', { postId });

export default banPost;
