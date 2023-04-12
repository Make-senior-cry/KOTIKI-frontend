import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import PostPaginatedList from '../ui/PostPaginatedList/PostPaginatedList';
import postsStore from '../store/postsStore';
import usePaginationParams from '../hooks/usePaginationParams';

function FeedPostList() {
  const {
    skip, limit, navigateNextPage, navigatePrevPage,
  } = usePaginationParams();
  const page = skip / limit + 1;

  useEffect(() => {
    postsStore.fetchFeed(skip, limit);
  }, [skip, limit]);

  function onNext() {
    if (postsStore.hasNext) {
      navigateNextPage();
    }
  }

  function onPrev() {
    if (postsStore.hasPrev) {
      navigatePrevPage();
    }
  }

  return (
    <PostPaginatedList
      posts={postsStore.posts}
      hasNext={postsStore.hasNext}
      hasPrev={postsStore.has}
      onReport={postsStore.onReport}
      onLike={postsStore.onLike}
      onNext={onNext}
      onPrev={onPrev}
      page={page}
    />
  );
}

export default observer(FeedPostList);
