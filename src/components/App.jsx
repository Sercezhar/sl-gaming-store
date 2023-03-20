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

  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    window.localStorage.setItem('currency', currentCurrency);
    window.localStorage.setItem('language', currentLanguage);
  }, [currentCurrency, currentLanguage]);

  function handleLanguageChange(index, lng) {
    setCurrentLanguage(index);

    if (lng) {
      i18n.changeLanguage(lng);
    }
  }

  return (
    <div className={styles.app}>
      <Appbar
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
        currentLanguage={currentLanguage}
        handleLanguageChange={handleLanguageChange}
        t={t}
      />

      <Container>
        <ImageSlider t={t} />

        <Preorder
          currentCurrency={currentCurrency}
          currentLanguage={currentLanguage}
          t={t}
        />

        <BestDeals
          currentCurrency={currentCurrency}
          currentLanguage={currentLanguage}
          t={t}
        />
      </Container>

      <Footer t={t} />
    </div>
  );
}

export default App;
