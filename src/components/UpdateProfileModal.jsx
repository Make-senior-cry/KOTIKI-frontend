import { observer } from 'mobx-react-lite';
import UserForm from '../ui/UserForm';
import updateProfile from '../api/updateProfile';
import userStore from '../store/userStore';
import PopUp from '../ui/PopUp';

function UpdateProfileModal({ onClose }) {
  function handleSubmit({ imageFile, name, description }) {
    updateProfile(name, description, imageFile)
      .then(() => globalThis.location.reload())
      .catch((e) => alert(e.message));
  }

  return (
    <PopUp show onClose={onClose}>
      <UserForm
        onSubmit={handleSubmit}
        defaultImageURL={userStore.user.imageURL}
        defaultName={userStore.user.name}
        defaultDescription={userStore.user.description}
      />
    </PopUp>
  );
}

export default observer(UpdateProfileModal);
