import { RiAppleFill, RiGoogleFill } from 'react-icons/ri';
import styles from './FooterLinksApps.module.css';

function FooterLinksApps() {
  return (
    <div>
      <h3 className={styles.title}>Download our apps</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="https://apple.com/app-store/">
            <RiGoogleFill size={20} color="#fff" />
            Google Play
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="https://play.google.com/store/">
            <RiAppleFill size={20} color="#fff" />
            App Store
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinksApps;
