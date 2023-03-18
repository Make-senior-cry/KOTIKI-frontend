import Avatar from './Avatar/Avatar';
import Button from './Button';
// import styles from "./ProfileShapka.module.css";
export default function ProfileShapka({
  user = {
    id: 1,
    name: 'Stupid Bastard',
    imageURL: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    description: 'bla bla bla',
    email: 'user@mail.ru',
    role: 'user',
    followersCount: 10,
    followingCount: 56,
    postsCount: 32,
  },
  showFollowButton, onClickFollow,
}) {
  if (user == null) {
    throw new Error('User is undefined');
  }
  return (
    <div className="container-lg p-2">
      <div className="row justify-content-md-center row-cols-3">
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
