import styles from './Avatar.module.css';

function Avatar({ onClick, src = './public/avatar.png', size }) {
  return (<img onClick={onClick} src={src} className={`rounded-circle shadow ${styles[size]}`} alt="Avatar" />);
}

export default Avatar;
