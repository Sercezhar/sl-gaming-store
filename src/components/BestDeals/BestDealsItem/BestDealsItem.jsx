import styles from './BestDealsItem.module.css';
import BestDealsItemBody from './BestDealsItemBody';
import BestDealsItemFooter from './BestDealsItemFooter/BestDealsItemFooter';

function BestDealsItem({ product }) {
  return (
    <li className={styles.item}>
      <BestDealsItemBody product={product} />

      <BestDealsItemFooter product={product} />
    </li>
  );
}

export default BestDealsItem;
