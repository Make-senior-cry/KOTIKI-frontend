import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protect from './components/Protect';
import Button from './ui/Button';
import Link from './ui/Link';
import Avatar from './ui/Avatar/Avatar';
import ProfileHeader from './ui/ProfileHeader';
import Post from './ui/Post/Post';

function App() {
  const userExample = ({
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

  const postExample = ({
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    createdAt: Date.now(),
    banned: false,
    likesCount: 2,
    reportsCount: 0,
    author: userExample,
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected pages */}
        <Route
          path="/profile"
          element={(
            <Protect>
              Profile page
              <Route path="/edit">Update profile page</Route>
            </Protect>
)}
        />
        <Route path="/search-people" element={<Protect>Search people page</Protect>} />
        <Route path="/create-post" element={<Protect>Create post page</Protect>} />
        {/* Guest pages */}
        <Route
          path="/sign-in"
          element={(
            <Protect guestOnly redirectTo="/profile">
              <ProfileHeader
                user={userExample}
                showFollowButton
              />
              <Avatar size="big" />
              <Avatar size="small" />
              <Button variant="secondary">Button</Button>
              <Link href="https://github.com/Make-senior-cry/KOTIKI-frontend" disableUnderline>Cats</Link>
              <Post post={postExample} />
            </Protect>
)}
        />
        <Route path="/sign-up" element={<Protect guestOnly redirectTo="/profile">SignUp page</Protect>} />
        {/* Main page */}
        <Route path="/" element={<Protect>Feed page</Protect>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
