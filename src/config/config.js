const config = {
  API_URL: import.meta.env.VITE_APP_API_URL,
  FAKE_LOGIN: import.meta.env.VITE_APP_FAKE_LOGIN === 'true',
  FAKE_POSTS: import.meta.env.VITE_APP_FAKE_POSTS === 'true',
};

export default config;
