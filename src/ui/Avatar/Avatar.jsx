import styles from './Avatar.module.css';

function Avatar({
  onClick, src, size, alt = 'avatar',
}) {
  return (<img onClick={onClick} src={src} className={`rounded-circle shadow ${styles[size]} d-block bg-light`} alt={alt} />);
}

export default Avatar;
