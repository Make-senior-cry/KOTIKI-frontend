import { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import Avatar from './Avatar/Avatar';
import Input from './Input';

export default function Navbar({
  user, logoText, onClickAvatar, onSearchComplete,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  function onKeyDownEnter(event) {
    if (event.key === 'Enter') onSearchComplete(searchQuery);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid  align-items-center">
        <ReactRouterLink className="navbar-brand d-flex gap-2" to="/">
          <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt={logoText} width="30" height="24" />
          <div>{logoText}</div>
        </ReactRouterLink>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ReactRouterLink className="nav-link link" to="/feed">Новости</ReactRouterLink>
            </li>
            <li className="nav-item">
              <ReactRouterLink className="nav-link link" to="/create-post">Опубликовать пост</ReactRouterLink>
            </li>
          </ul>
          <div className="d-flex gap-4 align-items-center">
            <Input
              placeholder="Поиск"
              onKeyDown={onKeyDownEnter}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Avatar src={user.imageURL} size="small" onClick={onClickAvatar} />
          </div>
        </div>
      </div>
    </nav>
  );
}
