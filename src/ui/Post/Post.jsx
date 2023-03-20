import { useId } from 'react';
import styles from './Post.module.css';
import Avatar from '../Avatar/Avatar';

function Post({ post, onLike, onReport }) {
  const dropdownMenuId = useId();

  if (post.banned) {
    return (
      <div className={`${styles.post} card`}>
        <div className="card-body card-text text-center">
          <strong>
            Post is banned!
          </strong>
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.post} card`}>
      <div className="card-body">
        <div className="card-title d-flex justify-content-between align-items-center">
          <Avatar src={post.author.imageURL} size="small" />
          <span>{ post.author.name }</span>
          <span>{ post.createdAt }</span>
        </div>
        <p className="card-text">{ post.text }</p>
        {
          post.imageURL
            ? <img src={post.imageURL} className="card-img" alt="Post image" />
            : null
        }
      </div>
      <div className="card-footer">
        <img src="../../../public/paw.png" alt="like" className={`me-2 ${styles.paw}`} onClick={onLike} />
        { post.likesCount }
        <div className="dropdown float-end">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id={dropdownMenuId}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
              />
            </svg>
          </button>
          <ul className="dropdown-menu" aria-labelledby={dropdownMenuId}>
            <li>
              <button className="dropdown-item" type="button" onClick={onReport}>Пожаловаться</button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Post;
