import { useState } from 'react';
import Button from '../ui/Button';
import Link from '../ui/Link';
import Avatar from '../ui/Avatar/Avatar';
import ProfileHeader from '../ui/ProfileHeader';
import RegistrationForm from '../components/RegistrationForm';
import FeedSwitcher from '../ui/Switcher/Switcher';
import Navbar from '../components/Navbar/Navbar';
import User from '../entities/user';
import PostRecord from '../entities/postRecord';
import Post from '../ui/Post/Post';
import userStore from '../store/userStore';

export default function ShowcasePage() {
  const user = new User({
    id: 1,
    name: 'Stupid Bastard',
    imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    description: 'bla bla bla',
    email: 'user@mail.ru',
    role: 'user',
    followersCount: 10,
    followingCount: 56,
    postsCount: 32,
  });
  const [switcherState, setSwitcherState] = useState('1');
  const postExample = new PostRecord({
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    createdAt: new Date(),
    banned: false,
    likesCount: 2,
    reportsCount: 0,
    author: user,
  });
  return (
    <>
      <FeedSwitcher active={switcherState} options={['1', '2', '3']} onChange={setSwitcherState} />
      <Navbar user={user} logoText="KOTIKI" />
      <ProfileHeader
        user={user}
        showFollowButton
      />
      <Avatar size="big" />
      <Avatar size="small" />
      <Button variant="secondary">Button</Button>
      <Link href="https://github.com/Make-senior-cry/KOTIKI-frontend" disableUnderline>Cats</Link>
      <RegistrationForm onCreateAccount={() => alert('AAAA')} />
      <Post post={postExample} />
      <Post post={{ banned: true }} />
      <Button onClick={() => {
        userStore.signOut().catch((e) => { console.error(e); });
      }}
      >
        SIGN OUT
      </Button>
    </>
  );
}
