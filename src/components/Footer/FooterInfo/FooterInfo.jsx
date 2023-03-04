import Divider from '@/components/Divider';
import styles from './FooterInfo.module.css';
import FooterInfoAbout from './FooterInfoAbout';
import FooterInfoConsoles from './FooterInfoConsoles';
import FooterInfoDeliver from './FooterInfoDeliver';
import FooterInfoLinks from './FooterInfoLinks';

function FooterInfo() {
  return (
    <div className={styles.info}>
      <FooterInfoAbout />

      <FooterInfoConsoles />

      <FooterInfoLinks />

      <FooterInfoDeliver />
    </div>
  );
}

export default FooterInfo;
