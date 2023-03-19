import cn from 'classnames';
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
    <div className={cn('card')`${styles.post}`}>
      <div className={cn('card-body')}>
        <div className={cn('card-title')}>
          <Avatar src={post.author.imageURL} size="small" />
          <span>{ post.author.name }</span>
          <span>{ post.createdAt }</span>
        </div>
        <p className={cn('card-text')}>{ post.text }</p>
      </div>
      <img src={post.imageURL} className={cn('card-img-bottom')} alt="Post image" />
      <div className={cn('card-footer')}>
        <img src="../../../public/paw.png" alt="like" className={`${styles.paw}`} />
        {post.likesCount}
      </div>
    </div>
  );
}

export default Post;
