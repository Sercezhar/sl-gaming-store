import styles from './ProductSliderItem.module.css';
import ProductSliderItemBody from './ProductSliderItemBody';
import ProductSliderItemFooter from './ProductSliderItemFooter';

function ProductSliderItem({
  product,
  currentCurrency,
  currentLanguage,
  cart,
  addToCart,
  t,
}) {
  return (
    <li className={styles.item}>
      <ProductSliderItemBody
        product={product}
        currentLanguage={currentLanguage}
        t={t}
      />

      <ProductSliderItemFooter
        product={product}
        currentCurrency={currentCurrency}
        cart={cart}
        addToCart={addToCart}
        t={t}
      />

      {product.discount ? (
        <span className={styles.discountIcon}>-{product.discount}%</span>
      ) : null}
    </li>
  );
}

export default ProductSliderItem;
