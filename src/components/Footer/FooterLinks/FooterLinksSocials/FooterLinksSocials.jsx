import { useTranslation } from 'react-i18next';
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiWhatsappLine,
  RiYoutubeFill,
} from 'react-icons/ri';
import styles from './FooterLinksSocials.module.css';

function FooterLinksSocials() {
  const [t] = useTranslation('global');

  return (
    <div>
      <h3 className={styles.title}>{t('footer.links.socials.title')}</h3>

      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="https://facebook.com/">
            <RiFacebookFill size={20} color="#fff" />
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="https://instagram.com/">
            <RiInstagramLine size={20} color="#fff" />
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="https://twitter.com/">
            <RiTwitterFill size={20} color="#fff" />
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="https://youtube.com/">
            <RiYoutubeFill size={20} color="#fff" />
          </a>
        </li>

        <li className={styles.item}>
          <a className={styles.link} href="https://whatsapp.com/">
            <RiWhatsappLine size={20} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinksSocials;
