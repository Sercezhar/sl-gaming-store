import { MdOutlineAddShoppingCart } from 'react-icons/md';
import styles from './BestDealsItemFooter.module.css';

function BestDealsItemFooter({ product }) {
  return (
    <div className={styles.footer}>
      <h3 className={styles.title}>{product.title}</h3>

      <span className={styles.buttonWrapper}>
        <button className={styles.button} type="button">
          <span>
            <MdOutlineAddShoppingCart size={20} color="#fff" />
          </span>
          <span className={styles.text}>Add to cart</span>
        </button>

        <span className={styles.price}>${product.priceUSD}.00</span>
      </span>
    </div>
  );
}

export default BestDealsItemFooter;
