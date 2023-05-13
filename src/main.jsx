import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import config from './config/config';
import userStore from './store/userStore';

if (import.meta.env.MODE !== 'production') {
  console.log(config);
}

async function bootstrap() {
  await userStore.fetchUserData();
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

bootstrap();
