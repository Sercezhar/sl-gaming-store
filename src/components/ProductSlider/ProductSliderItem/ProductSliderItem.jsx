import styles from './ProductSliderItem.module.css';
import ProductSliderItemBody from './ProductSliderItemBody';
import ProductSliderItemFooter from './ProductSliderItemFooter';

function ProductSliderItem({ product, currentCurrency }) {
  return (
    <li className={styles.item}>
      <ProductSliderItemBody product={product} />

      <ProductSliderItemFooter
        product={product}
        currentCurrency={currentCurrency}
      />

      {product.discount ? (
        <span className={styles.discountIcon}>-{product.discount}%</span>
      ) : null}
    </li>
  );
}

export default ProductSliderItem;
