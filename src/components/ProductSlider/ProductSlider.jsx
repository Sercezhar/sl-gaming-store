import { useState } from 'react';
import styles from './ProductSlider.module.css';
import ProductSliderControl from './ProductSliderControl';
import ProductSliderItem from './ProductSliderItem';

function ProductSlider({ products, currentCurrency }) {
  const [listPosition, setListPosition] = useState(0);

  const cardWidth = () => {
    if (listPosition + 2 === products.length) {
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
    if (listPosition + 3 === products.length) {
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
          {products.map((product, index) => (
            <ProductSliderItem
              product={product}
              key={index}
              currentCurrency={currentCurrency}
            />
          ))}
        </ul>
      </div>

      <ProductSliderControl onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

export default ProductSlider;
