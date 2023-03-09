import styles from './ProductSliderItem.module.css';
import ProductSliderItemBody from './ProductSliderItemBody';
import ProductSliderItemFooter from './ProductSliderItemFooter';

function ProductSliderItem({ product }) {
  return (
    <li className={styles.item}>
      <ProductSliderItemBody product={product} />

      <ProductSliderItemFooter product={product} />
    </li>
  );
}

export default ProductSliderItem;
