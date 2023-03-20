import Divider from '@/components/Divider';
import styles from './FooterInfo.module.css';
import FooterInfoAbout from './FooterInfoAbout';
import FooterInfoConsoles from './FooterInfoConsoles';
import FooterInfoDeliver from './FooterInfoDeliver';
import FooterInfoLinks from './FooterInfoLinks';

function FooterInfo({ t }) {
  return (
    <div className={styles.info}>
      <FooterInfoAbout t={t} />

      <FooterInfoConsoles t={t} />

      <FooterInfoLinks t={t} />

      <FooterInfoDeliver t={t} />
    </div>
  );
}

export default FooterInfo;
