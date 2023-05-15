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
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isFollower, setIsFollower] = useState(false);
  const {
    skip, limit, navigateNextPage, navigatePrevPage,
  } = usePaginationParams();
  const page = skip / limit + 1;

  const isCurrentUser = parseInt(userStore.user.id, 10) === parseInt(userId, 10);
  let actionButtonText;
  if (isCurrentUser) {
    actionButtonText = 'ИЗМЕНИТЬ ПРОФИЛЬ';
  } else {
    actionButtonText = isFollower ? 'ОТПИСАТЬСЯ' : 'ПОДПИСАТЬСЯ';
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

  function updateIsFollower() {
    API.isFollowedByCurrentUser(userId)
      .then((isFollow) => {
        setIsFollower(isFollow);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  // Определение пользователя, которого надо отрисовать
  const incorrectUserRendered = parseInt(user.id, 10) !== parseInt(userId, 10);
  useEffect(() => {
    if (incorrectUserRendered) {
      if (isCurrentUser) setUser(userStore.user);
      else {
        setAlien();
        updateIsFollower();
      }
    }
  }, [incorrectUserRendered]);

  // Загрузка постов пользователя
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
    API.follow(userId)
      .then((u) => {
        updateIsFollower();
        setUser(u);
      })
      .catch((error) => {
        alert(error.message);
      });
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
