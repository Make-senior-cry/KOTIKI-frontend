import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Protect from './components/Protect';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPeoplePage from './pages/SearchPeoplePage';
import ProfilePage from './pages/ProfilePage';
import Modals from './components/Modals';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected pages */}
        <Route
          path="/user"
        >
          <Route path=":userId" element={(<Protect><ProfilePage /></Protect>)} />
          <Route path="/user/edit" element={<>Update profile page</>} />
        </Route>
        <Route path="/search/user" element={<Protect><SearchPeoplePage /></Protect>} />
        <Route path="/create-post" element={<Protect>Create post page</Protect>} />
        {/* Guest pages */}
        <Route
          path="/sign-in"
          element={<Protect guestOnly redirectTo="/"><LoginPage /></Protect>}
        />
        <Route
          path="/sign-up"
          element={<Protect guestOnly redirectTo="/"><RegisterPage /></Protect>}
        />
        {/* Main page */}
        <Route
          path="/"
          element={<Protect><FeedPage /></Protect>}
        />
      </Routes>
      <Modals />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
