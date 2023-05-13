import { useState } from 'react';
import Avatar from './Avatar/Avatar';
import Input from './Input';
// import Button from './Button';

export default function PhotoUploader({ user, changeAvatar }) {
  const [avatar, setAvatar] = useState(user.imageURL);
  function onChangeHandler(e) {
    setAvatar(e.target.value);
    changeAvatar(user, avatar);
  }
  return (
    <>
      <Input type="file" onChange={(e) => onChangeHandler(e)} />
      <Avatar size="medium" src={user.imageURL} />
    </>
  );
}
