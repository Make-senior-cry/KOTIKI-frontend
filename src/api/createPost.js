import httpClient from './httpClient';

const createPost = (text, imageFile = null) => {
  const formData = new FormData();
  formData.append('text', text);

  if (imageFile) {
    formData.append('imageFile', imageFile);
  }

  return httpClient.post('/post', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default createPost;
