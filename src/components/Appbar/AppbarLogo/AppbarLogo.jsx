import { IoGameController } from 'react-icons/io5';
import styles from './AppbarLogo.module.css';

function AppbarLogo() {
  return (
    <div className={styles.logo}>
      <span>
        <IoGameController size={20} />
      </span>{' '}
      g-store
    </div>
  );
}

export default AppbarLogo;
