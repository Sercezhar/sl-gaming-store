import styles from './Appbar.module.css';
import AppbarActions from './AppbarActions';
import AppbarLogo from './AppbarLogo';
import AppbarSearch from './AppbarSearch';

function Appbar({
  currentLanguage,
  handleLanguageChange,
  currentCurrency,
  setCurrentCurrency,
  t,
}) {
  return (
    <header className={styles.header}>
      <AppbarLogo />

      <AppbarSearch t={t} />

      <AppbarActions
        currentLanguage={currentLanguage}
        handleLanguageChange={handleLanguageChange}
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
      />
    </header>
  );
}

export default Appbar;
