import { observer } from 'mobx-react-lite';
import PopUp from '../ui/PopUp';
import PostForm from '../ui/PostForm';
import * as API from '../api';

function AddPostModal({ onClose }) {
  function handleSubmit({ imageFile, text }) {
    console.log(imageFile);
    API.createPost(text, imageFile)
      .then(() => globalThis.location.reload())
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
