import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import styles from './PasswordToggler.module.css';

function PasswordToggler({ isPassVisible, setIsPassVisible }) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => setIsPassVisible(prevState => !prevState)}
    >
      {isPassVisible ? (
        <AiFillEye size={22} color="#fff" />
      ) : (
        <AiFillEyeInvisible size={22} color="#fff" />
      )}
    </button>
  );
}

export default PasswordToggler;
