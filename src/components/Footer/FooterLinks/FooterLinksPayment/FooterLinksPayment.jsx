import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import styles from './FooterLinksPayment.module.css';

function FooterLinksPayment() {
  return (
    <div>
      <h3 className={styles.title}>Pay sequrely</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="https://visa.com/">
            <FaCcVisa size={20} color="#fff" />
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="https://paypal.com/">
            <FaCcPaypal size={20} color="#fff" />
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="https://mastercard.com/">
            <FaCcMastercard size={20} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinksPayment;
