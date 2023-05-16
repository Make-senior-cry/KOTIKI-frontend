import { useState, useRef } from 'react';

export default function PhotoUploader({
  onFileAdded, label, backgroundImageURL, isCircle, appeal,
}) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState(appeal);
  const hasLabel = !!label.trim();
  const inputFormClass = `${isCircle ? 'uploaderPhotoCircle' : 'uploaderPhotoSquare'} photoUploaderLabel d-flex justify-content-center align-items-center`;

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  function addFile(file) {
    onFileAdded(file);
    setFileName(file.name);
  }
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      addFile(e.dataTransfer.files[0]);
    }
  };

  function onChangeHandler() {
    if (inputRef.current.files.length > 0) {
      addFile(inputRef.current.files[0]);
    }
  }

  return (
    <div onDragEnter={handleDrag} className="photoUploader">
      {dragActive && <div className="dropArea" onDrop={handleDrop} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} />}
      {hasLabel && <p>{label}</p>}
      <label style={{ backgroundImage: `url("${backgroundImageURL}")`, backgroundSize: 'contain' }} className={inputFormClass}>
        <div className="fileName">{fileName}</div>
        <input className="d-none" ref={inputRef} type="file" onChange={onChangeHandler} accept="image/*" />
      </label>
    </div>
  );
}
