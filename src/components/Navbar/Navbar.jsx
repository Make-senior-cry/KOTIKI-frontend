import { Link as ReactRouterLink } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';
import NavbarUser from './NavbarUser';

const NAVBAR_LINKS = {
  Новости: '/feed',
  'Опубликовать пост': '/create-post',
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid  align-items-center">
        <ReactRouterLink className="navbar-brand d-flex gap-2 align-items-center" to="/">
          <img src="/logo.png" alt="KOTIKI" width="24" height="24" />
          <div>KOTIKI</div>
        </ReactRouterLink>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {Object.entries(NAVBAR_LINKS).map(([name, link]) => (
              <li className="nav-item" key={name}>
                <ReactRouterLink className="nav-link link" to={link}>{name}</ReactRouterLink>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-2">
            <NavbarSearch />
            <NavbarUser />
          </div>
        </div>
      </div>
    </nav>
  );
}
