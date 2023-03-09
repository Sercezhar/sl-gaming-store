import classNames from 'classnames/bind';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './ProductSliderControl.module.css';

let cx = classNames.bind(styles);

function ProductSliderControl({ onPrev, onNext }) {
  let buttonPrevClasses = cx('button', 'buttonPrev');
  let buttonNextClasses = cx('button', 'buttonNext');

  return (
    <>
      <button
        className={buttonPrevClasses}
        type="button"
        onClick={() => onPrev()}
      >
        <IoIosArrowBack size={24} color="#fff" />
      </button>
      <button
        className={buttonNextClasses}
        type="button"
        onClick={() => onNext()}
      >
        <IoIosArrowForward size={24} color="#fff" />
      </button>
    </>
  );
}

export default ProductSliderControl;
