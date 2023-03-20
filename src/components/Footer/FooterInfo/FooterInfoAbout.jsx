import styles from './FooterInfo.module.css';

function FooterInfoAbout({ t }) {
  return (
    <div>
      <h3 className={styles.title}>{t('footer.info.about.title')}</h3>

      <p>{t('footer.info.about.text')}</p>
    </div>
  );
}

export default FooterInfoAbout;
