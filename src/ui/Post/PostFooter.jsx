import styles from './Post.module.css';
import PostAdditionalActions from '../PostAdditionalActions';

function PostFooter({ likesCount, onLike, onReport }) {
  return (
    <div className="card-footer">
      <img src="../../../public/paw.png" alt="like" className={`me-2 ${styles.paw}`} onClick={onLike} />
      { likesCount }
      <PostAdditionalActions onReport={onReport} />
    </div>
  );
}

export default PostFooter;
