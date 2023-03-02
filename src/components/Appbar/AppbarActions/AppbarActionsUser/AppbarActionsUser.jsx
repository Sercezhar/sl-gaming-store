import styles from './AppbarActionsUser.module.css';
import { BiUserCircle } from 'react-icons/bi';

function AppbarActionsUser() {
  return (
    <div>
      <button className={styles.button}>
        <BiUserCircle size={45} />
      </button>
    </div>
  );
}

export default AppbarActionsUser;
