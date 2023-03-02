import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import styles from './AppbarActionsCart.module.css';

function AppbarActionsCart() {
  return (
    <div>
      <button className={styles.button} type="button">
        <MdOutlineLocalGroceryStore size={20} />
      </button>
    </div>
  );
}

export default AppbarActionsCart;
