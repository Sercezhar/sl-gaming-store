import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import styles from './AppbarActionsCart.module.css';

function AppbarActionsCart({ cart, isCartOpen }) {
  return (
    <div>
      <button
        className={styles.button}
        type="button"
        onClick={() => isCartOpen(true)}
      >
        <MdOutlineLocalGroceryStore size={20} color="#fff" />

        {cart.length > 0 ? (
          <span className={styles.quantity}>{cart.length}</span>
        ) : null}
      </button>
    </div>
  );
}

export default AppbarActionsCart;
