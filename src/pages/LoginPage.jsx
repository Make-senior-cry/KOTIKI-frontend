import { useState } from 'react';
import { toast } from 'react-toastify';
import AuthLayout from '../ui/AuthLayout';
import LoginForm from '../components/LoginForm';
import userStore from '../store/userStore';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginAccount = (email, password) => userStore
    .signIn(email, password)
    .catch((error) => setErrorMessage(error.message));

  const handleLoginWithGoogle = () => {
    toast.info('Не поддерживается');
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
