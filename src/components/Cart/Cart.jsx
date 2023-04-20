import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MdClose } from 'react-icons/md';
import styles from './Cart.module.css';
import CartCheckout from './CartCheckout/CartCheckout';
import CartList from './CartList/CartList';

let cx = classNames.bind(styles);

function Cart(
  { cart, isOpen, isCartOpen, deleteFromCart, currentCurrency },
  ref
) {
  const [t] = useTranslation('global');

  const currentPrice = price => (currentCurrency === 0 ? price.usd : price.uah);

  let cartClasses = cx({
    cart: true,
    isOpen,
  });

  let backdropClasses = cx({
    backdrop: true,
    isOpen,
  });

  return (
    <div className={backdropClasses}>
      <div ref={ref} className={cartClasses}>
        <button
          className={styles.buttonClose}
          onClick={() => isCartOpen(false)}
        >
          <MdClose size={26} color="#fff" />
        </button>

        <h2 className={styles.title}>{t('cart.title')}</h2>

        {cart.length > 0 ? (
          <div>
            <CartList
              cart={cart}
              deleteFromCart={deleteFromCart}
              currentPrice={currentPrice}
              currentCurrency={currentCurrency}
            />

            <CartCheckout
              cart={cart}
              currentPrice={currentPrice}
              currentCurrency={currentCurrency}
              t={t}
            />
          </div>
        ) : (
          <p className={styles.notification}>{t('cart.empty')}</p>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Cart);
