import { useId } from 'react';
import styles from './Post.module.css';
import BannedPost from '../BannedPost';
import PostTitle from '../PostTitle';

function Post({ post, onLike, onReport }) {
  const dropdownMenuId = useId();

  if (post.banned) {
    return <BannedPost />;
  }
  return (
    <div className={`${styles.post} card`}>
      <div className="card-body">
        <PostTitle
          avatar={post.author.imageURL}
          authorName={post.author.name}
          createdAt={post.formattedDate}
        />
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

      </div>
    </div>
  );
}

export default Post;
