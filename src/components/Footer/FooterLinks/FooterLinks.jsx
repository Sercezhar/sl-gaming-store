import Divider from '@/components/Divider';
import styles from './FooterLinks.module.css';
import FooterLinksApps from './FooterLinksApps';
import FooterLinksPayment from './FooterLinksPayment';
import FooterLinksSocials from './FooterLinksSocials';

function FooterLinks({ t }) {
  return (
    <div className={styles.wrapper}>
      <Divider marginBottom="80px" />

      <div className={styles.linksGroup}>
        <FooterLinksSocials t={t} />

        <FooterLinksApps t={t} />

        <FooterLinksPayment t={t} />
      </div>
    </div>
  );
}

export default FooterLinks;
