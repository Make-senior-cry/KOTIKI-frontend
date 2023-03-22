import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protect from './components/Protect';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShowcasePage from './pages/ShowcasePage';

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
        <Route path="/search-people" element={<Protect>Search people page</Protect>} />
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
          element={(
            <Protect>
              Feed page
            </Protect>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
