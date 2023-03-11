import handlePriceDiscount from '@/utils/handlePriceDiscount';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import styles from './ProductSliderItemFooter.module.css';

function ProductSliderItemFooter({ product }) {
  return (
    <div className={styles.footer}>
      <h3 className={styles.title} title={product.title}>
        {product.title}
      </h3>

      <div className={styles.actions}>
        <span className={styles.buttonWrapper}>
          <button className={styles.button} type="button">
            <span>
              <MdOutlineAddShoppingCart size={20} color="#fff" />
            </span>
            <span className={styles.text}>Add to cart</span>
          </button>

          <span className={styles.price}>
            ${handlePriceDiscount(product.priceUSD, product.discount)}
          </span>
        </span>

        {product.discount ? (
          <span className={styles.priceOld}>
            ${handlePriceDiscount(product.priceUSD)}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default ProductSliderItemFooter;
