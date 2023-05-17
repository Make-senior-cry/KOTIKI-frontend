import { useMemo, useState } from 'react';
import PhotoUploader from './PhotoUploader';
import Input from './Input';
import Button from './Button';

function UserForm({
  onSubmit,
  defaultImageURL = '',
  defaultName = '',
  defaultDescription = '',
}) {
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState(defaultName);
  const [description, setDescription] = useState(defaultDescription);
  const imagePreviewURL = useMemo(
    () => (imageFile ? URL.createObjectURL(imageFile) : defaultImageURL),
    [imageFile],
  );

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ imageFile, name, description });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Обновить профиль</h2>
      <div className="mb-2">
        <PhotoUploader
          label="Фото"
          onFileAdded={setImageFile}
          backgroundImageURL={imagePreviewURL}
          appeal="Загрузить фото"
          isCircle
        />
      </div>
      <Input
        label="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Аркадий Паровозов"
        className="mb-2"
        maxLength="17"
        required
      />
      <Input
        label="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Я - Аркадий Паровозов. Я люблю JavaScript"
        className="mb-4"
        maxLength="80"
      />
      <Button type="submit">Изменить</Button>
    </form>
  );
}

export default UserForm;
