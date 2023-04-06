import handlePriceDiscount from '@/utils/handlePriceDiscount';
import { MdCheckCircle, MdOutlineAddShoppingCart } from 'react-icons/md';
import styles from './ProductSliderItemFooter.module.css';

function ProductSliderItemFooter({
  product,
  currentCurrency,
  cart,
  addToCart,
  t,
}) {
  const currency =
    currentCurrency === 0 ? product.price.USD : product.price.UAH;

  const isInCart = id => cart.some(item => item.id === id);

  return (
    <div className={styles.footer}>
      <h3 className={styles.title} title={product.title}>
        {product.title}
      </h3>

      <div className={styles.actions}>
        <span className={styles.buttonWrapper}>
          <button
            className={styles.button}
            type="button"
            onClick={() => addToCart(product)}
            disabled={isInCart(product.id)}
          >
            <span>
              {isInCart(product.id) ? (
                <MdCheckCircle size={22} color="#fff" />
              ) : (
                <MdOutlineAddShoppingCart size={20} color="#fff" />
              )}
            </span>

            <span className={styles.text}>
              {isInCart(product.id)
                ? t('productSlider.buttonCart.added')
                : t('productSlider.buttonCart.default')}
            </span>
          </button>

          <span className={styles.price}>
            {handlePriceDiscount(currency, product.discount, currentCurrency)}
          </span>
        </span>

        {product.discount && !isInCart(product.id) ? (
          <span className={styles.priceOld}>
            {handlePriceDiscount(currency, null, currentCurrency)}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default ProductSliderItemFooter;
