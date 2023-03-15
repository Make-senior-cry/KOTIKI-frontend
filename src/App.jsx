import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protect from "./components/Protect";
import Button from "./ui/Button";
const App = () => <BrowserRouter>
<Routes>
  {/* Protected pages */}
  <Route path="/profile" element={<Protect>Profile page<Route path="/edit">Update profile page</Route></Protect>} />
  <Route path="/search-people" element={<Protect >Search people page</Protect>} />
  <Route path="/create-post" element={<Protect>Create post page</Protect>} />
  {/* Guest pages */}
  <Route path="/sign-in" element={<Protect guestOnly redirectTo='/profile'><Button variant="secondary">Button</Button></Protect>} />
  <Route path="/sign-up" element={<Protect guestOnly redirectTo='/profile'>SignUp page</Protect>} />
  {/* Main page */}
  <Route path="/" element={<Protect>Feed page</Protect>}/>
</Routes>
</BrowserRouter>;

export default App;