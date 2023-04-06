import Divider from '@/components/Divider';
import { useTranslation } from 'react-i18next';
import styles from './FooterInfo.module.css';
import FooterInfoAbout from './FooterInfoAbout';
import FooterInfoConsoles from './FooterInfoConsoles';
import FooterInfoDeliver from './FooterInfoDeliver';
import FooterInfoLinks from './FooterInfoLinks';

function FooterInfo() {
  const [t] = useTranslation('global');

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
