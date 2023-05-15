import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import PopUp from '../ui/PopUp';
import PostForm from '../ui/PostForm';
import * as API from '../api';
import userStore from '../store/userStore';

function AddPostModal({ onClose }) {
  const navigate = useNavigate();

  function handleSubmit({ imageFile, text }) {
    console.log(imageFile);
    API.createPost(text, imageFile)
      .then(() => {
        onClose();
        navigate(userStore.user.link);
      })
      .catch((e) => alert(e.message));
  }

  return (
    <PopUp show onClose={onClose}>
      <div className="postForm">
        <PostForm onSubmit={handleSubmit} />
      </div>
    </PopUp>
  );
}

export default observer(AddPostModal);
