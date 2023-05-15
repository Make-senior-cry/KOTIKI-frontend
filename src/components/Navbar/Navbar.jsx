import { Link as ReactRouterLink } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
import NavbarSearch from './NavbarSearch';
import NavbarUser from './NavbarUser';
import modalStore from '../../store/modalStore';

export default function Navbar() {
  const [mobileNavbarShown, setMobileNavbarShown] = useState(false);

  function toggleMobileNavbarShown() {
    setMobileNavbarShown((prevValue) => !prevValue);
  }

  function handleShowAddPostModal() {
    modalStore.showModal(modalStore.ADD_POST_MODAL);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid  align-items-center">
        <ReactRouterLink className="navbar-brand d-flex gap-2 align-items-center" to="/">
          <img src="/logo.png" alt="KOTIKI" width="24" height="24" />
          <div>KOTIKI</div>
        </ReactRouterLink>
        <button onClick={toggleMobileNavbarShown} className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={cn('collapse navbar-collapse', mobileNavbarShown && 'show')} id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ReactRouterLink className="nav-link link" to="/feed">Новости</ReactRouterLink>
            </li>
            <li className="nav-item">
              <button
                onClick={handleShowAddPostModal}
                className="nav-link link bg-transparent border-0"
                type="button"
              >
                Опубликовать пост
              </button>
            </li>
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
