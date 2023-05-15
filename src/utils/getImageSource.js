import config from '../config/config';

export default function getImageSource(imageUrl) {
  return config.API_URL + imageUrl;
}
