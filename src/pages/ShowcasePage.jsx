import { useState } from 'react';
import Button from '../ui/Button';
import Link from '../ui/Link';
import Avatar from '../ui/Avatar/Avatar';
import ProfileHeader from '../ui/ProfileHeader';
import RegistrationForm from '../components/RegistrationForm';
import FeedSwitcher from '../ui/FeedSwitcher';
import Navbar from '../ui/Navbar';
import PhotoUploader from '../ui/PhotoUploader';

export default function ShowcasePage() {
  const user = {
    id: 1,
    name: 'Stupid Bastard',
    imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    description: 'bla bla bla',
    email: 'user@mail.ru',
    role: 'user',
    followersCount: 10,
    followingCount: 56,
    postsCount: 32,
  };
  const [switcherState, setSwitcherState] = useState('1');
  return (
    <>
      <Navbar user={user} logoText="KOTIKI" />
      <ProfileHeader
        user={user}
        showFollowButton
      />
      <FeedSwitcher active={switcherState} options={['1', '2', '3']} onChange={setSwitcherState} />
      <PhotoUploader user={user} />
      <Avatar size="big" />
      <Avatar size="small" />
      <Button variant="secondary">Button</Button>
      <Link href="https://github.com/Make-senior-cry/KOTIKI-frontend" disableUnderline>Cats</Link>
      <RegistrationForm onCreateAccount={() => alert('AAAA')} />
    </>
  );
}
