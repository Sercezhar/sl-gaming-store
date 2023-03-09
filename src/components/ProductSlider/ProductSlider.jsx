import { useState } from 'react';
import styles from './ProductSlider.module.css';
import ProductSliderControl from './ProductSliderControl';

function ProductSlider({ children, array }) {
  const [listPosition, setListPosition] = useState(0);

  const cardWidth = () => {
    if (listPosition + 2 === array.length) {
      return 344;
    }

    return 388;
  };

  function onPrev() {
    if (listPosition === 0) {
      return;
    }

    setListPosition(prevState => prevState - 1);
  }

  function onNext() {
    if (listPosition + 3 === array.length) {
      return;
    }

    setListPosition(prevState => prevState + 1);
  }

  return (
    <div>
      <div style={{ maxWidth: '1120px', overflowX: 'hidden' }}>
        <ul
          className={styles.list}
          style={{
            transform: `translateX(-${cardWidth() * listPosition}px)`,
          }}
        >
          {children}
        </ul>
      </div>

      <ProductSliderControl onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

export default ProductSlider;
