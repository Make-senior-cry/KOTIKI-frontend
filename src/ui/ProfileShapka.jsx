import Avatar from './Avatar/Avatar';
import Button from './Button';
// import styles from "./ProfileShapka.module.css";
export default function ProfileShapka({ showFollowButton, onClickFollow }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Avatar size="small" />
        </div>
        <div className="col">
          <div>
            <p>Hallie Graham</p>
            <p>Any small step towards your goals creates momentum</p>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>5</p>
                <p>подписчиков</p>
              </div>
              <div className="col">
                <p>5</p>
                <p>подписок</p>
              </div>
              <div className="col">
                <p>5</p>
                <p>постов</p>
              </div>
            </div>
            <div className={`row ${showFollowButton ? '' : 'd-none'}`}>
              <Button onClick={onClickFollow} variant="outline-primary">Подписаться</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
