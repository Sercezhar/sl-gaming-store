import styles from './Appbar.module.css';
import AppbarActions from './AppbarActions';
import AppbarLogo from './AppbarLogo';
import AppbarSearch from './AppbarSearch';

function Appbar({
  currentLanguage,
  handleLanguageChange,
  currentCurrency,
  setCurrentCurrency,
  cart,
  isCartOpen,
  deleteFromCart,
  setIsModal,
  setIsRegistered,
}) {
  return (
    <header className={styles.header}>
      <AppbarLogo />

      <AppbarSearch />

      <AppbarActions
        currentLanguage={currentLanguage}
        handleLanguageChange={handleLanguageChange}
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
        cart={cart}
        isCartOpen={isCartOpen}
        deleteFromCart={deleteFromCart}
        setIsModal={setIsModal}
        setIsRegistered={setIsRegistered}
      />
    </header>
  );
}

export default Appbar;
