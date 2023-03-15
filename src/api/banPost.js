import httpClient from './httpClient';

const banPost = (postId) => httpClient.post('/ban-post', { postId });

export default banPost;
