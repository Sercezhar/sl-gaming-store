import Divider from '@/components/Divider/Divider';
import handlePriceDiscount from '@/utils/handlePriceDiscount';
import { MdDelete } from 'react-icons/md';
import styles from './CartList.module.css';

function CartList({ cart, deleteFromCart, currentCurrency, currentPrice }) {
  return (
    <ul>
      {cart.map(({ id, image, title, price, discount }, index) => (
        <li className={styles.item} key={index}>
          <div className={styles.info}>
            <img src={image} alt={title} height="50" />

            <div className={styles.details}>
              <span>{title}</span>

              <span className={styles.priceGroup}>
                <span
                  style={{
                    color: discount ? 'var(--tertiary-color)' : '#fff',
                  }}
                >
                  {handlePriceDiscount(
                    currentPrice(price),
                    null,
                    currentCurrency
                  )}
                </span>

                {discount ? (
                  <span className={styles.priceDiscounted}>
                    {handlePriceDiscount(
                      currentPrice(price),
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
  );
}

export default CartList;
