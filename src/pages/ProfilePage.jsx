import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../ui/DefaultLayout';
import ProfileHeader from '../ui/ProfileHeader';
import userStore from '../store/userStore';
import usePaginationParams from '../hooks/usePaginationParams';
import postsStore from '../store/postsStore';
import FeedPostList from '../components/FeedPostList';
import * as API from '../api';

function ProfilePage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({});
  const [isFollowed, setIsFollowed] = useState(false);
  const { userId } = useParams();
  const {
    skip, limit, navigateNextPage, navigatePrevPage,
  } = usePaginationParams();
  const page = skip / limit + 1;

  const isCurrentUser = parseInt(userStore.user.id, 10) === parseInt(userId, 10);
  let actionButtonText;
  if (isCurrentUser) {
    actionButtonText = 'ИЗМЕНИТЬ ПРОФИЛЬ';
  } else {
    actionButtonText = isFollowed ? 'ОТПИСАТЬСЯ' : 'ПОДПИСАТЬСЯ';
  }

  function setAlien() {
    API.getUser(userId)
      .then((u) => {
        setUser(u);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  useEffect(() => {
    if (parseInt(user.id, 10) !== parseInt(userId, 10)) {
      if (isCurrentUser) setUser(userStore.user);
      else setAlien();
    }
  });

  useEffect(() => {
    postsStore.fetchUserPosts(userId, skip, limit)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [skip, limit]);

  function handleEditProfile() {
    console.log('EDIT PROFILE');
  }

  function follow() {
    console.log('FOLLOW');
    setIsFollowed(!isFollowed);
  }

  return (
    <DefaultLayout
      hero={(
        <ProfileHeader
          user={user}
          actionButtonText={actionButtonText}
          handleActionButtonClick={isCurrentUser ? handleEditProfile : follow}
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

export default ProfilePage;
