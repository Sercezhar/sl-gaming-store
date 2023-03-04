import Container from '../Container';
import Divider from '../Divider';
import styles from './Footer.module.css';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterNotices from './FooterNotices';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Divider marginBottom="86px" />

        <FooterInfo />

        <FooterLinks />
      </Container>

      <FooterNotices />
    </footer>
  );
}

export default Footer;
