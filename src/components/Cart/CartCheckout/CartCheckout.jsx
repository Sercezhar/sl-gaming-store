import handlePriceDiscount from '@/utils/handlePriceDiscount';
import styles from './CartCheckout.module.css';

function CartCheckout({ cart, currentCurrency, currentPrice, t }) {
  function handleCartTotal() {
    const cartTotal = cart.reduce((acc, item) => {
      let price = handlePriceDiscount(
        currentPrice(item.price),
        item.discount,
        currentCurrency
      );

      acc += Number(price.replace(/[$₴]/g, ''));

      return acc;
    }, 0);

    return currentCurrency === 0 ? `$${cartTotal.toFixed(2)}` : `${cartTotal}₴`;
  }

  return (
    <div className={styles.checkout}>
      <p className={styles.total}>
        {t('cart.total')}: {handleCartTotal()}
      </p>
      <button className={styles.buttonPurchase} type="button">
        {t('cart.buyButton')}
      </button>
    </div>
  );
}

export default CartCheckout;
