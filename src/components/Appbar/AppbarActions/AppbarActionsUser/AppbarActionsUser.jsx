import { BiUserCircle } from 'react-icons/bi';
import styles from './AppbarActionsUser.module.css';

function AppbarActionsUser({ setIsModal, setIsRegistered }) {
  function handleClickOnUser() {
    setIsRegistered(true);
    setIsModal(true);
    document.body.style.overflowY = 'hidden';
  }

  return (
    <div>
      <button className={styles.button} onClick={() => handleClickOnUser()}>
        <BiUserCircle size={48} color="#fff" />
      </button>
    </div>
  );
}

export default AppbarActionsUser;
