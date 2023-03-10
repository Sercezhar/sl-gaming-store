import { BiUserCircle } from 'react-icons/bi';
import styles from './AppbarActionsUser.module.css';

function AppbarActionsUser() {
  return (
    <div>
      <button className={styles.button}>
        <BiUserCircle size={48} color="#fff" />
      </button>
    </div>
  );
}

export default AppbarActionsUser;
