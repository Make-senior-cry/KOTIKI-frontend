import Avatar from './Avatar/Avatar';
import Button from './Button';

export default function ProfileHeader({ user, showFollowButton, onClickFollow }) {
  if (user == null) {
    throw new Error('User is undefined');
  }
  return (
    <div className="container-lg p-2">
      <div className="row justify-content-md-center align-items-center row-cols-3">
        <div className="col-auto">
          <Avatar size="big" src={user.imageURL} />
        </div>
        <div className="col-2 align-content-cent">
          <div className="text-primary fw-bold">{user.name}</div>
          <div className="text-primary">{user.description}</div>
        </div>
        <div className="col-4">
          <div className="row row-cols-3 pb-3">
            <div className="col-sm-auto">
              <div className="text-primary fw-bold">{user.followersCount}</div>
              <div className="text-primary text-uppercase">Подписчиков</div>
            </div>
            <div className="col-sm-auto">
              <div className="text-primary fw-bold">{user.followingCount}</div>
              <div className="text-primary text-uppercase">Подписок</div>
            </div>
            <div className="col-sm-auto">
              <div className="text-primary fw-bold">{user.postsCount}</div>
              <div className="text-primary text-uppercase">Постов</div>
            </div>
          </div>
          <div className={`row-sm-4 ${showFollowButton ? '' : 'd-none'}`}>
            <Button onClick={onClickFollow} variant="outline-primary">ПОДПИСАТЬСЯ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
