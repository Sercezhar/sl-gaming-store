import styles from './AppbarActions.module.css';
import AppbarActionsCart from './AppbarActionsCart';
import AppbarActionsDropdown from './AppbarActionsDropdown';
import AppbarActionsUser from './AppbarActionsUser';
import { currency, flags } from './data';

function AppbarActions({
  currentLanguage,
  handleLanguageChange,
  currentCurrency,
  setCurrentCurrency,
  cart,
  deleteFromCart,
}) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <AppbarActionsDropdown
          array={flags}
          isIconRounded={true}
          currentState={currentLanguage}
          setCurrentState={handleLanguageChange}
        />
      </li>

      <li className={styles.item}>
        <AppbarActionsDropdown
          array={currency}
          currentState={currentCurrency}
          setCurrentState={setCurrentCurrency}
        />
      </li>

      <li className={styles.item}>
        <AppbarActionsCart
          cart={cart}
          currentCurrency={currentCurrency}
          deleteFromCart={deleteFromCart}
        />
      </li>

      <li className={styles.item}>
        <AppbarActionsUser />
      </li>
    </ul>
  );
}

export default AppbarActions;
