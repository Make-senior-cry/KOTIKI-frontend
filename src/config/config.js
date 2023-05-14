const config = {
  API_URL: import.meta.env.VITE_APP_API_URL,
  FAKE_LOGIN: import.meta.env.VITE_APP_FAKE_LOGIN === 'true',
  DEV: import.meta.env.VITE_APP_DEV === 'true',
};

export default config;
