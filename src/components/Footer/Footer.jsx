import Container from '../Container';
import Divider from '../Divider';
import styles from './Footer.module.css';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterNotices from './FooterNotices';

function Footer({ t }) {
  return (
    <footer className={styles.footer}>
      <Container>
        <Divider marginBottom="86px" />

        <FooterInfo t={t} />

        <FooterLinks t={t} />
      </Container>

      <FooterNotices t={t} />
    </footer>
  );
}

export default Footer;
