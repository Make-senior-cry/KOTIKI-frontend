import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protect from './components/Protect';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShowcasePage from './pages/ShowcasePage';
import SearchPeoplePage from './pages/SearchPeoplePage';
import Modals from './components/Modals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Showcase page */}
        <Route path="/" element={<ShowcasePage />} />
        {/* Protected pages */}
        <Route
          path="/profile"
          element={(
            <Protect>
              Profile page
            </Protect>
          )}
        >
          <Route path="/profile/edit" element={<>Update profile page</>} />
        </Route>
        <Route path="/search/user" element={<Protect><SearchPeoplePage /></Protect>} />
        <Route path="/create-post" element={<Protect>Create post page</Protect>} />
        {/* Guest pages */}
        <Route
          path="/sign-in"
          element={<Protect guestOnly redirectTo="/profile"><LoginPage /></Protect>}
        />
        <Route
          path="/sign-up"
          element={<Protect guestOnly redirectTo="/profile"><RegisterPage /></Protect>}
        />
        {/* Main page */}
        <Route
          path="/feed"
          element={(<Protect><FeedPage /></Protect>)}
        />
      </Routes>
      <Modals />
    </BrowserRouter>
  );
}

export default App;
