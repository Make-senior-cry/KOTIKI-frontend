import { useEffect, useState } from 'react';
import FeedPostList from '../components/FeedPostList';
import FeedSwitcher from '../components/FeedSwitcher';
import DefaultLayout from '../ui/DefaultLayout';
import usePaginationParams from '../hooks/usePaginationParams';
import postsStore from '../store/postsStore';

export default function FeedPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    skip, limit, navigateNextPage, navigatePrevPage,
  } = usePaginationParams();
  const page = skip / limit + 1;

  useEffect(() => {
    postsStore.fetchFeed(skip, limit)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [skip, limit]);

  return (
    <DefaultLayout
      hero={<FeedSwitcher />}
      errorMessage={errorMessage}
    >
      <FeedPostList
        page={page}
        navigateNextPage={navigateNextPage}
        navigatePrevPage={navigatePrevPage}
      />
    </DefaultLayout>
  );
}
