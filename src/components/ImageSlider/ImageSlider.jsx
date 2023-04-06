import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillPatchExclamationFill } from 'react-icons/bs';
import Divider from '../Divider';
import SecondaryTitle from '../SecondaryTitle';
import Section from '../Section';
import ImageSliderCarousel from './ImageSliderCarousel';
import ImageSliderControl from './ImageSliderControl';
import images from './images';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const [t] = useTranslation('global');

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
    <Section>
      <Divider />
      <SecondaryTitle text={t('imageSlider.title')}>
        <BsFillPatchExclamationFill size={20} color="var(--primary-color)" />
      </SecondaryTitle>

      <ImageSliderCarousel images={images} currentImage={currentImage} />

      <ImageSliderControl
        images={images}
        currentImage={currentImage}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </Section>
  );
};

export default ImageSlider;
