import styles from './Post.module.css';
import Avatar from '../Avatar/Avatar';

function Post({ post }) {
  if (post.banned) {
    return (
      <div>
        Post is banned
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
      </div>
      {
        post.imageURL
          ? <img src={post.imageURL} className="card-img-bottom" alt="Post image" />
          : null
      }
      <div className="card-footer">
        <img src="../../../public/paw.png" alt="like" className={`${styles.paw}`} />
        { post.likesCount }
      </div>
    </div>
  );
}

export default Post;
