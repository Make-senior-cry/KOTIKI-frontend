import { useEffect, useState } from 'react';
import postsStore, { feedType } from '../store/postsStore';
import Switcher from '../ui/Switcher/Switcher';

const FEED_OPTIONS_TO_TYPES = {
  Подписки: feedType.FOLLOWING,
  Новые: feedType.NEW,
};
const FEED_OPTIONS = Object.keys(FEED_OPTIONS_TO_TYPES);

function FeedSwitcher() {
  const [feedOption, setFeedOption] = useState(FEED_OPTIONS[0]);

  useEffect(() => {
    postsStore.setType(FEED_OPTIONS_TO_TYPES[feedOption]);
  }, [feedOption]);

  return (<Switcher options={FEED_OPTIONS} active={feedOption} onChange={setFeedOption} />);
}

export default FeedSwitcher;
