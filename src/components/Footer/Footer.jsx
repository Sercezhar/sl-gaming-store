import styles from './Footer.module.css';
import FooterLinks from './FooterLinks';
import FooterNotices from './FooterNotices';

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterLinks />

      <FooterNotices />
    </footer>
  );
}

export default Footer;
