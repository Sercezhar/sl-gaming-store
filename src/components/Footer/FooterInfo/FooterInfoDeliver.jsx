import styles from './FooterInfo.module.css';

function FooterInfoDeliver({ t }) {
  return (
    <div>
      <h3 className={styles.title}>{t('footer.info.deliver.title')}</h3>

      <p>{t('footer.info.deliver.text')}</p>
    </div>
  );
}

export default FooterInfoDeliver;
