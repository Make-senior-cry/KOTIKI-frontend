import { observer } from 'mobx-react-lite';
import { Link as ReactRouterLink } from 'react-router-dom';
import userStore from '../../store/userStore';
import Avatar from '../../ui/Avatar/Avatar';

function NavbarUser() {
  return userStore.isAuthorized && (
    <ReactRouterLink to={userStore.user.link}>
      <Avatar src={userStore.user.imageUrl} size="small" />
    </ReactRouterLink>
  );
}

export default observer(NavbarUser);
