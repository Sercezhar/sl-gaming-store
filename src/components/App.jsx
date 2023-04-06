import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css';
import Appbar from './Appbar/Appbar';
import BestDeals from './BestDeals';
import Container from './Container';
import Footer from './Footer';
import ImageSlider from './ImageSlider/ImageSlider';
import Preorder from './Preorder';

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

  const [t, i18n] = useTranslation('global');

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

  return (
    <div className={styles.app}>
      <Appbar
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
        currentLanguage={currentLanguage}
        handleLanguageChange={handleLanguageChange}
        cart={cart}
        setCart={setCart}
        deleteFromCart={deleteFromCart}
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
