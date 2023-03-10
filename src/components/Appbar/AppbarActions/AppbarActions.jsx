import styles from './AppbarActions.module.css';
import AppbarActionsCart from './AppbarActionsCart';
import AppbarActionsDropdown from './AppbarActionsDropdown';
import AppbarActionsUser from './AppbarActionsUser';
import { currency, flags } from './data';

function AppbarActions({
  currentLanguage,
  setCurrentLanguage,
  currentCurrency,
  setCurrentCurrency,
}) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <AppbarActionsDropdown
          array={flags}
          isIconRounded={true}
          currentState={currentLanguage}
          setCurrentState={setCurrentLanguage}
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
        <AppbarActionsCart />
      </li>

      <li className={styles.item}>
        <AppbarActionsUser />
      </li>
    </ul>
  );
}

export default AppbarActions;
