import { useEffect, useRef } from 'react';
import { Dropdown } from 'bootstrap';

function PostAdditionalActions({ onReport }) {
  const buttonRef = useRef();

  useEffect(() => {
    const dropdown = new Dropdown(buttonRef.current);

    return () => dropdown.dispose();
  }, [buttonRef.current]);

  return (
    <div className="dropdown float-end">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        ref={buttonRef}
      >
        <img src="three-dots-vertical.svg" alt="" />
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button" onClick={onReport}>Нашипеть</button>
        </li>
      </ul>
    </div>
  );
}

export default PostAdditionalActions;
