import styles from './App.module.css';
import Appbar from './Appbar/Appbar';
import BestDeals from './BestDeals';
import Container from './Container';
import Footer from './Footer';
import ImageSlider from './ImageSlider/ImageSlider';
import Preorder from './Preorder';

function App() {
  return (
    <div className={styles.app}>
      <Appbar />

      <Container>
        <ImageSlider />

        <Preorder />

        <BestDeals />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
