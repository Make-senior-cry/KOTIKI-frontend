import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import UserForm from '../ui/UserForm';
import updateProfile from '../api/updateProfile';
import userStore from '../store/userStore';
import PopUp from '../ui/PopUp';

function UpdateProfileModal({ onClose }) {
  const navigate = useNavigate();

  function handleSubmit({ imageFile, name, description }) {
    updateProfile(name, description, imageFile)
      .then(() => {
        onClose();
        navigate(userStore.user.link);
      })
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
