import styles from './Post.module.css';
import PostAdditionalActions from './PostAdditionalActions';

function PostFooter({
  likesCount, onLike, onReport, liked,
}) {
  return (
    <div className="card-footer">
      <button type="button" onClick={onLike} className="border-0 bg-transparent">
        {
          liked
            ? <img src="/likedPaw.png" alt="like" className={`me-2 ${styles.paw}`} />
            : <img src="/paw.png" alt="like" className={`me-2 ${styles.paw}`} />
        }
      </button>

      { likesCount }
      <PostAdditionalActions onReport={onReport} />
    </div>
  );
}

export default PostFooter;
