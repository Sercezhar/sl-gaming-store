import { useState } from 'react';
import styles from './Appbar.module.css';
import AppbarActions from './AppbarActions';
import AppbarLogo from './AppbarLogo';
import AppbarSearch from './AppbarSearch';

function Appbar() {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(0);

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
