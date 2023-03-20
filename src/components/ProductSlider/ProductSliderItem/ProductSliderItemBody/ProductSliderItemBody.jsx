import handleDateFormat from '@/utils/handleDateFormat';
import styles from './ProductSliderItemBody.module.css';

function ProductSliderItemBody({ product, currentLanguage, t }) {
  return (
    <div className={styles.body}>
      <img src={product.image} alt={product.title} />

      <div className={styles.overlay}>
        <p className={styles.row}>{product.description}</p>
        <p className={styles.row}>
          {t('productSlider.item.genre')}:{' '}
          <span>{product.genres.join(', ')}</span>
        </p>
        <p className={styles.row}>
          {t('productSlider.item.date')}:{' '}
          <span>{handleDateFormat(product.date, currentLanguage)}</span>
        </p>
        <p className={styles.row}>
          {t('productSlider.item.developer')}: <span>{product.publisher}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductSliderItemBody;
