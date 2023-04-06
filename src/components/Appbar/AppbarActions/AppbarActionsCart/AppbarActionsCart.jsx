import Divider from '@/components/Divider';
import useClickOutside from '@/hooks/useClickOutside';
import handlePriceDiscount from '@/utils/handlePriceDiscount';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { MdClose, MdDelete, MdOutlineLocalGroceryStore } from 'react-icons/md';
import styles from './AppbarActionsCart.module.css';

let cx = classNames.bind(styles);

function AppbarActionsCart({ cart, deleteFromCart, currentCurrency }) {
  const { ref, isOpen, setIsOpen } = useClickOutside();
  const [t] = useTranslation('global');

  const currency = price => (currentCurrency === 0 ? price.USD : price.UAH);

  function handleCartOnOpen() {
    setIsOpen(true);
    document.body.style.overflowY = 'hidden';
  }

  function handleCartOnClose() {
    setIsOpen(false);
    document.body.style.overflowY = 'auto';
  }

  let cartClasses = cx({
    cart: true,
    isOpen,
  });

  let backdropClasses = cx({
    backdrop: true,
    isOpen,
  });

  return (
    <div>
      <button
        className={styles.button}
        type="button"
        onClick={() => handleCartOnOpen()}
      >
        <MdOutlineLocalGroceryStore size={20} color="#fff" />

        {cart.length > 0 ? (
          <span className={styles.quantity}>{cart.length}</span>
        ) : null}
      </button>

      <div className={backdropClasses}>
        <div ref={ref} className={cartClasses}>
          <button
            className={styles.buttonClose}
            onClick={() => handleCartOnClose()}
          >
            <MdClose size={26} color="#fff" />
          </button>

          <div>
            <h2 className={styles.title}>{t('cart.title')}</h2>

            <ul>
              {cart.map(({ id, image, title, price, discount }, index) => (
                <li className={styles.item} key={index}>
                  <div className={styles.info}>
                    <img src={image} alt={title} height="50" />

                    <div className={styles.details}>
                      <span>{title}</span>

                      <span className={styles.price}>
                        <span
                          className={styles.priceDefault}
                          style={{
                            color: discount ? 'var(--tertiary-color)' : '#fff',
                          }}
                        >
                          {handlePriceDiscount(
                            currency(price),
                            null,
                            currentCurrency
                          )}
                        </span>

                        {discount ? (
                          <span className={styles.priceDiscount}>
                            {handlePriceDiscount(
                              currency(price),
                              discount,
                              currentCurrency
                            )}
                          </span>
                        ) : null}
                      </span>
                    </div>

                    <div className={styles.deleteWrapper}>
                      <button
                        type="button"
                        className={styles.buttonDelete}
                        onClick={() => deleteFromCart(id)}
                      >
                        <MdDelete size={20} color="#fff" />
                      </button>
                    </div>
                  </div>

                  <Divider marginBottom="10px" />
                </li>
              ))}
            </ul>

            <div className={styles.checkout}>
              <button className={styles.buttonClear} type="button">
                Очистити
              </button>
              <button className={styles.buttonPurchase} type="button">
                Оплатити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppbarActionsCart;
