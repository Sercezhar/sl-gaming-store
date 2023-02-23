import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import createAnArray from '../../../utils/createAnArray';
import styles from './ImageSliderControl.module.css';

let cx = classNames.bind(styles);

function ImageSliderControl({ images, currentImage, prevImage, nextImage }) {
  const indicators = createAnArray(0, images.length);

  const handleIndicatorClasses = value => {
    let indicatorClasses = cx({
      indicator: true,
      current: value === currentImage,
    });

    return indicatorClasses;
  };

  return (
    <div className={styles.control}>
      <button
        className={styles.button}
        type="button"
        onClick={() => prevImage()}
      >
        <IoIosArrowBack />
      </button>

      <div className={styles.indicators}>
        {indicators.map(indicator => (
          <span
            className={handleIndicatorClasses(indicator)}
            key={indicator}
          ></span>
        ))}
      </div>

      <button
        className={styles.button}
        type="button"
        onClick={() => nextImage()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default ImageSliderControl;
