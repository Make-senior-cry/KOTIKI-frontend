import { observer } from 'mobx-react-lite';
import modalStore from '../store/modalStore';
import UpdateProfileModal from './UpdateProfileModal';
import AddPostModal from './AddPostModal';

const MODALS_COMPONENTS = {
  [modalStore.ADD_POST_MODAL]: AddPostModal,
  [modalStore.EDIT_USER_MODAL]: UpdateProfileModal,
};

function Modals() {
  const ModalComponent = MODALS_COMPONENTS[modalStore.currentModal];
  if (ModalComponent) {
    return <ModalComponent onClose={modalStore.hideModal} />;
  }
  return null;
}

export default observer(Modals);
