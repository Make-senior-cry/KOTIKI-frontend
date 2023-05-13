import Post from '../Post/Post';

export default function PostPaginatedListPosts({ posts, handleLike, handleReport }) {
  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-4" key={post.id}>
          <Post
            post={post}
            onLike={handleLike}
            onReport={handleReport}
          />
        </div>
      ))}
    </div>
  );
}
