import Alert from '../Alert';
import PostPaginatedListPagination from './PostPaginatedListPagination';
import PostPaginatedListPosts from './PostPaginatedListPosts';

export default function PostPaginatedList({
  posts,
  hasNext,
  hasPrev,
  onNext,
  onPrev,
  page,
  onLike,
  onReport,
}) {
  const hasPosts = posts.length > 0;

  return (
    <div>
      {hasPosts
        ? (
          <PostPaginatedListPosts
            posts={posts}
            handleLike={onLike}
            handleReport={onReport}
          />
        )
        : <Alert type="info">Постов нет</Alert>}
      <PostPaginatedListPagination
        hasNext={hasNext}
        hasPrev={hasPrev}
        onNext={onNext}
        onPrev={onPrev}
        page={page}
      />
    </div>
  );
}
