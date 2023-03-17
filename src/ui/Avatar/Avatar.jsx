import styles from './Avatar.module.css';

function Avatar({ onClick, src, size }) {
  return (<img onClick={onClick} src={src ?? './public/avatar.png'} className={`rounded-circle shadow ${styles[size]}`} alt="Avatar" />);
}

export default Avatar;
