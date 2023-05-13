import { useState } from 'react';
import AuthLayout from '../ui/AuthLayout';
import LoginForm from '../components/LoginForm';
import userStore from '../store/userStore';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginAccount = (email, password) => userStore
    .signIn(email, password)
    .catch((error) => setErrorMessage(error.message));

  const handleLoginWithGoogle = () => {
    alert('Не поддерживается');
  };

  return (
    <AuthLayout errorMessage={errorMessage}>
      <LoginForm
        onLoginAccount={handleLoginAccount}
        onLoginWithGoogle={handleLoginWithGoogle}
      />
    </AuthLayout>
  );
}
