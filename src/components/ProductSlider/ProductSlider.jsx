import { useState } from 'react';
import styles from './ProductSlider.module.css';
import ProductSliderControl from './ProductSliderControl';
import ProductSliderItem from './ProductSliderItem';
import { useTranslation } from 'react-i18next';

function ProductSlider({
  products,
  currentCurrency,
  currentLanguage,
  cart,
  addToCart,
}) {
  const [listPosition, setListPosition] = useState(0);

  const [t] = useTranslation('global');

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
    <div className={styles.wrapper}>
      <div style={{ maxWidth: '1120px', overflowX: 'hidden' }}>
        <ul
          className={styles.list}
          style={{
            transform: `translateX(-${cardWidth() * listPosition}px)`,
          }}
        >
          {products &&
            products.map((product, index) => (
              <ProductSliderItem
                product={product}
                key={index}
                currentCurrency={currentCurrency}
                currentLanguage={currentLanguage}
                cart={cart}
                addToCart={addToCart}
                t={t}
              />
            ))}
        </ul>
      </div>

      <ProductSliderControl onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

export default ProductSlider;
