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
import PhotoUploader from '../ui/PhotoUploader';
import PopUp from '../ui/PopUp';

export default function ShowcasePage() {
  const user = new User({
    id: 1,
    name: 'Аркадий Паровозов',
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
      <Navbar user={user} logoText="KOTIKI" />
      <ProfileHeader
        user={user}
        showFollowButton
      />
      <Button variant="secondary">Open Popup</Button>
      <PopUp show onClose={() => alert('Popup Closed')} />
      <FeedSwitcher active={switcherState} options={['1', '2', '3']} onChange={setSwitcherState} />
      <PhotoUploader onFileAdded={console.log} isCircle appeal="Перетащите фото сюда" label="Загрузчик фото" backgroundImageURL="https://avatars.dzeninfra.ru/get-zen_doc/34175/pub_5cea2361585c2f00b5c9cb0b_5cea310a752e5b00b25b9c01/scale_1200" user={user} />
      <Avatar size="big" />
      <Avatar size="small" />
      <Button variant="secondary">Button</Button>
      <Link href="https://github.com/Make-senior-cry/KOTIKI-frontend" disableUnderline>Cats</Link>
      <RegistrationForm onCreateAccount={() => alert('AAAA')} />
      <Post post={postExample} />
      <Post post={{ banned: true }} />
    </>
  );
}
