import { useState } from 'react';
import { toast } from 'react-toastify';
import AuthLayout from '../ui/AuthLayout';
import RegistrationForm from '../components/RegistrationForm';
import userStore from '../store/userStore';

export default function RegisterPage() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateAccount = (name, email, password) => userStore
    .signUp(name, email, password)
    .catch((error) => setErrorMessage(error.message));

  const handleCreateWithGoogle = () => {
    toast.info('Не поддерживается');
  };

  return (
    <AuthLayout errorMessage={errorMessage}>
      <RegistrationForm
        onCreateAccount={handleCreateAccount}
        onCreateWithGoogle={handleCreateWithGoogle}
      />
    </AuthLayout>
  );
}
