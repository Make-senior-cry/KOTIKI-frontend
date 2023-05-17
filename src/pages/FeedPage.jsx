import { useEffect, useState } from 'react';
import FeedPostList from '../components/FeedPostList';
import FeedSwitcher from '../components/FeedSwitcher';
import DefaultLayout from '../ui/DefaultLayout';
import usePaginationParams from '../hooks/usePaginationParams';
import postsStore, { feedType } from '../store/postsStore';

const FEED_OPTIONS_TO_TYPES = {
  Подписки: feedType.FOLLOWING,
  Новые: feedType.NEW,
};
const FEED_OPTIONS = Object.keys(FEED_OPTIONS_TO_TYPES);

export default function FeedPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [feedOption, setFeedOption] = useState(FEED_OPTIONS[0]);
  const {
    skip, limit, navigateNextPage, navigatePrevPage,
  } = usePaginationParams();
  const page = skip / limit + 1;

  useEffect(() => {
    postsStore.setType(FEED_OPTIONS_TO_TYPES[feedOption]);
  }, [feedOption]);

  useEffect(() => {
    postsStore.fetchFeed(skip, limit)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [skip, limit, feedOption]);

  return (
    <DefaultLayout
      hero={(
        <FeedSwitcher
          feedOptions={FEED_OPTIONS}
          activeFeedOption={feedOption}
          changeFeedOption={setFeedOption}
        />
      )}
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
