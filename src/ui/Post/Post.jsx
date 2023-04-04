import styles from './Post.module.css';
import BannedPost from '../BannedPost';
import PostTitle from './PostTitle';
import PostImage from './PostImage';
import PostFooter from './PostFooter';

function Post({ post, onLike, onReport }) {
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
        <PostImage imageUrl={post.imageURL} />
      </div>
      <PostFooter likesCount={post.likesCount} onLike={onLike} onReport={onReport} />
    </div>
  );
}

export default Post;