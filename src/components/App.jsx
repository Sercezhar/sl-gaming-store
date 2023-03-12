import { useEffect, useState } from 'react';
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

  useEffect(() => {
    window.localStorage.setItem('currency', currentCurrency);
    window.localStorage.setItem('language', currentLanguage);
  }, [currentCurrency, currentLanguage]);

  return (
    <div className={styles.app}>
      <Appbar
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />

      <Container>
        <ImageSlider />

        <Preorder currentCurrency={currentCurrency} />

        <BestDeals currentCurrency={currentCurrency} />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
