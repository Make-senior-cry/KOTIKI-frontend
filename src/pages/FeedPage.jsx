import FeedPostList from '../components/FeedPostList';
import FeedSwitcher from '../components/FeedSwitcher';
import DefaultLayout from '../ui/DefaultLayout';

export default function FeedPage() {
  return (
    <DefaultLayout hero={<FeedSwitcher />}>
      <FeedPostList />
    </DefaultLayout>
  );
}
