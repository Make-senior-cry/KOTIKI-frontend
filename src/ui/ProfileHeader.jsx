import Avatar from './Avatar/Avatar';
import Button from './Button';

export default function ProfileHeader({
  user, actionButtonText, handleActionButtonClick,
}) {
  if (user == null) {
    throw new Error('User is undefined');
  }
  return (
    <div className="container-lg p-2">
      <div className="row justify-content-md-center align-items-center row-cols-3">
        <div className="col-auto">
          <Avatar size="big" src={user.imageUrl} />
        </div>
        <div className="col-2 align-content-cent">
          <div className="fw-bold text-break">{user.name}</div>
          <div className="text-break">{user.description}</div>
        </div>
        <div className="col-4">
          <div className="row row-cols-3 pb-3">
            <div className="col-sm-auto">
              <div className="fw-bold">{user.followersCount}</div>
              <div className="text-uppercase">Подписчики</div>
            </div>
            <div className="col-sm-auto">
              <div className="fw-bold">{user.followingCount}</div>
              <div className="text-uppercase">Подписки</div>
            </div>
            <div className="col-sm-auto">
              <div className="fw-bold">{user.postsCount}</div>
              <div className="text-uppercase">Посты</div>
            </div>
          </div>
          <div className="row-sm-4">
            <Button onClick={handleActionButtonClick} variant="outline-primary">{actionButtonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
