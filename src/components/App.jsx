import useClickOutside from '@/hooks/useClickOutside';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css';
import Appbar from './Appbar/Appbar';
import BestDeals from './BestDeals';
import Cart from './Cart/Cart';
import Container from './Container';
import Footer from './Footer';
import ImageSlider from './ImageSlider/ImageSlider';
import Modal from './Modal/Modal';
import Preorder from './Preorder';
import UserIdentification from './UserIdentification/UserIdentification';

function App() {
  const [currentCurrency, setCurrentCurrency] = useState(() => {
    return Number(window.localStorage.getItem('currency')) ?? 0;
  });
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return Number(window.localStorage.getItem('language')) ?? 0;
  });
  const [cart, setCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem('cart')) ?? [];
  });
  const [isModal, setIsModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isPassVisible, setIsPassVisible] = useState(false);

  const [t, i18n] = useTranslation('global');

  const { ref, isOpen, setIsOpen } = useClickOutside(false);

  useEffect(() => {
    window.localStorage.setItem('currency', currentCurrency);
    window.localStorage.setItem('language', currentLanguage);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [currentCurrency, currentLanguage, cart]);

  function handleLanguageChange(index, lng) {
    setCurrentLanguage(index);

    if (lng) {
      i18n.changeLanguage(lng);
    }
  }

  function addToCart(product) {
    const item = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      discount: product.discount,
    };

    setCart([...cart, item]);
  }

  function deleteFromCart(id) {
    setCart(prevState => prevState.filter(item => item.id !== id));
  }

  function handleCloseModal() {
    setIsModal(false);
    setIsPassVisible(false);
    document.body.style.overflowY = 'auto';
  }

  return (
    <div className={styles.app}>
      <Modal
        isModal={isModal}
        handleCloseModal={handleCloseModal}
        title={isRegistered ? t('userForm.signIn') : t('userForm.signUp')}
      >
        <UserIdentification
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
          isPassVisible={isPassVisible}
          setIsPassVisible={setIsPassVisible}
        />
      </Modal>

      <Cart
        ref={ref}
        cart={cart}
        isOpen={isOpen}
        isCartOpen={setIsOpen}
        deleteFromCart={deleteFromCart}
        currentCurrency={currentCurrency}
      />

      <Appbar
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
        currentLanguage={currentLanguage}
        handleLanguageChange={handleLanguageChange}
        cart={cart}
        isCartOpen={setIsOpen}
        deleteFromCart={deleteFromCart}
        setIsModal={setIsModal}
        setIsRegistered={setIsRegistered}
      />

      <Container>
        <ImageSlider />

        <Preorder
          currentCurrency={currentCurrency}
          currentLanguage={currentLanguage}
          cart={cart}
          addToCart={addToCart}
        />

        <BestDeals
          currentCurrency={currentCurrency}
          currentLanguage={currentLanguage}
          cart={cart}
          addToCart={addToCart}
        />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
