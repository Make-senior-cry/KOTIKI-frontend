import { useMemo, useState } from 'react';
import Input from './Input';
import PhotoUploader from './PhotoUploader';
import Button from './Button';

function PostForm({ onSubmit, defaultImageURL = '', defaultText = '' }) {
  const [imageFile, setImageFile] = useState(null);
  const [text, setText] = useState(defaultText);
  const imagePreviewURL = useMemo(
    () => (imageFile ? URL.createObjectURL(imageFile) : defaultImageURL),
    [imageFile],
  );

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ imageFile, text });
  }

  function onChangeText(e) {
    setText(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Создать пост</h2>
      <div className="mb-2">
        <PhotoUploader
          label="Фото"
          onFileAdded={setImageFile}
          backgroundImageURL={imagePreviewURL}
          appeal="Загрузить фото"
        />
      </div>
      <Input
        label="Текст"
        value={text}
        onChange={onChangeText}
        textarea
        placeholder="Текст поста"
        className="mb-4"
        required
      />
      <Button type="submit">Создать</Button>
    </form>
  );
}

export default PostForm;
