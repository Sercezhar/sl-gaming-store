import styles from './App.module.css';
import Appbar from './Appbar/Appbar';
import Footer from './Footer';
import ImageSlider from './ImageSlider/ImageSlider';

function App() {
  return (
    <div className={styles.app}>
      <Appbar />

      <ImageSlider />

      <Footer />
    </div>
  );
}

export default App;
