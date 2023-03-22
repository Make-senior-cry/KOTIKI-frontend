function PostImage({ imageUrl }) {
  return (
    imageUrl
      ? <img src={imageUrl} className="card-img" alt="Post image" />
      : null
  );
}

export default PostImage;
