import { observer } from 'mobx-react-lite';
import PostPaginatedList from '../ui/PostPaginatedList/PostPaginatedList';
import postsStore from '../store/postsStore';

function FeedPostList({ page, navigateNextPage, navigatePrevPage }) {
  function onNext() {
    if (postsStore.hasNextPage) {
      navigateNextPage();
    }
  }

  function onPrev() {
    if (postsStore.hasPrevPage) {
      navigatePrevPage();
    }
  }

  return (
    <PostPaginatedList
      posts={postsStore.posts}
      hasNextPage={postsStore.hasNextPage}
      hasPrevPage={postsStore.hasPrevPage}
      onReport={postsStore.reportPost}
      onLike={postsStore.likePost}
      onNext={onNext}
      onPrev={onPrev}
      page={page}
    />
  );
}

export default observer(FeedPostList);
