import { useId } from 'react';

function PostAdditionalActions({ onReport }) {
  const dropdownMenuId = useId();

  return (
    <div className="dropdown float-end">
      <button
        className="btn dropdown-toggle"
        type="button"
        id={dropdownMenuId}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="public/three-dots-vertical.svg" alt="" />
      </button>
      <ul className="dropdown-menu" aria-labelledby={dropdownMenuId}>
        <li>
          <button className="dropdown-item" type="button" onClick={onReport}>Пожаловаться</button>
        </li>
      </ul>
    </div>
  );
}

export default PostAdditionalActions;
