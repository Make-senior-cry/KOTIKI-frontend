import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Link from '../ui/Link';

export default function LoginForm({ onLoginAccount, onLoginWithGoogle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateAccount(e) {
    e.preventDefault();
    onLoginAccount(email, password);
  }

  return (
    <form onSubmit={handleCreateAccount} className="d-flex flex-column gap-3 align-items-center">
      <h1>Войти</h1>
      <fieldset className="d-flex flex-column gap-2 w-100">
        <Input placeholder="Email" autoComplete="on" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Пароль" autoComplete="on" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </fieldset>
      <Button type="submit">Войти</Button>
      <Button variant="outline-primary" onClick={onLoginWithGoogle}>Продолжить с Google</Button>
      <Link href="/sign-up">Создать аккаунт</Link>
    </form>
  );
}
