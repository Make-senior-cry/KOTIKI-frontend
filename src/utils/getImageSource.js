import config from '../config/config';

export default function getImageSource(imageUrl) {
  const isCorrectUrl = !!(imageUrl.includes('http') || imageUrl.includes('https'));
  return isCorrectUrl ? imageUrl : config.API_URL + imageUrl;
}
