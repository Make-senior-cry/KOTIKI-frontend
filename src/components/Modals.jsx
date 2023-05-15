import { observer } from 'mobx-react-lite';
import modalStore from '../store/modalStore';
import AddPostModal from './AddPostModal';

function Modals() {
  switch (modalStore.currentModal) {
    case modalStore.ADD_POST_MODAL:
      return <AddPostModal onClose={modalStore.hideModal} />;
    default:
      return null;
  }
}

export default observer(Modals);
