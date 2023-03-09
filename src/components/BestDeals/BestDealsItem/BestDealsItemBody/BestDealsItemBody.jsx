import styles from './BestDealsItemBody.module.css';

function BestDealsItemBody({ product }) {
  return (
    <div className={styles.body}>
      <img src={product.image} alt={product.title} />

      <div className={styles.overlay}>
        <p className={styles.row}>{product.description}</p>
        <p className={styles.row}>
          Genre: <span>{product.genres.join(', ')}</span>
        </p>
        <p className={styles.row}>
          Release date: <span>{product.date}</span>
        </p>
        <p className={styles.row}>
          Developer: <span>{product.publisher}</span>
        </p>
      </div>
    </div>
  );
}

export default BestDealsItemBody;
