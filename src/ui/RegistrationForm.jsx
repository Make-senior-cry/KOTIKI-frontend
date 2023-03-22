import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Link from './Link';

export default function RegistrationForm({ onCreateAccount, onCreateWithGoogle }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleCreateAccount(e) {
    e.preventDefault();
    onCreateAccount(username, email, password);
  }

  return (
    <form onSubmit={handleCreateAccount} className="d-flex flex-column gap-3 align-items-center">
      <h1>Создать аккаунт</h1>
      <fieldset className="d-flex flex-column gap-2 w-100">
        <Input placeholder="Имя" autocomplete="on" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Email" autocomplete="on" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Пароль" autocomplete="on" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </fieldset>
      <Button type="submit">Создать</Button>
      <Button variant="outline-primary" onClick={onCreateWithGoogle}>Продолжить с Google</Button>
      <Link href="/sign-in">Войти</Link>
    </form>
  );
}
