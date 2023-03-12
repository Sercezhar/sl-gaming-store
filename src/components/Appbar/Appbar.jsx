import styles from './Appbar.module.css';
import AppbarActions from './AppbarActions';
import AppbarLogo from './AppbarLogo';
import AppbarSearch from './AppbarSearch';

function Appbar({
  currentLanguage,
  setCurrentLanguage,
  currentCurrency,
  setCurrentCurrency,
}) {
  return (
    <header className={styles.header}>
      <AppbarLogo />

      <AppbarSearch />

      <AppbarActions
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
      />
    </header>
  );
}

export default Appbar;
