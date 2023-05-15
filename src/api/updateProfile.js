import httpClient from './httpClient';
import User from '../entities/user';

const updateProfile = (name, description, imageFile = null) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);

  if (imageFile) {
    formData.append('imageFile', imageFile);
  }

  return httpClient
    .put('/user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => new User(response.data));
};

export default updateProfile;
