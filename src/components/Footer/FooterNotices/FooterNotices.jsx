import Container from '@/components/Container';
import styles from './FooterNotices.module.css';

function FooterNotices({ t }) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.notices}>
          <p>Gaming Store © 2014-2023. {t('footer.notices.text')}</p>
          <nav className={styles.navigation}>
            <a className={styles.link} href="#">
              {t('footer.notices.links.0')}
            </a>
            <a className={styles.link} href="#">
              {t('footer.notices.links.1')}
            </a>
          </nav>
        </div>
      </Container>
    </div>
  );
}

export default FooterNotices;
