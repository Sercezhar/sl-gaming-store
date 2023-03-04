import { useEffect, useState } from 'react';
import Divider from '../Divider';
import images from './images';
import styles from './ImageSlider.module.css';
import ImageSliderCarousel from './ImageSliderCarousel';
import ImageSliderControl from './ImageSliderControl';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  function prevImage() {
    const isFirstImage = currentImage === 0;
    const newCurrentImage = isFirstImage ? images.length - 1 : currentImage - 1;
    setCurrentImage(newCurrentImage);
  }

  function nextImage() {
    const isLastImage = currentImage === images.length - 1;
    const newCurrentImage = isLastImage ? 0 : currentImage + 1;
    setCurrentImage(newCurrentImage);
  }

  return (
    <div className={styles.slider}>
      <Divider marginBottom="28px" />

      <h2 className={styles.title}>New big releases</h2>

      <ImageSliderCarousel images={images} currentImage={currentImage} />

      <ImageSliderControl
        images={images}
        currentImage={currentImage}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </div>
  );
};

export default ImageSlider;
