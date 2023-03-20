import styles from './FooterInfo.module.css';

function FooterInfoConsoles({ t }) {
  const consoles = [
    { title: t('footer.info.consoles.items.0'), link: '#' },
    { title: t('footer.info.consoles.items.1'), link: '#' },
    { title: t('footer.info.consoles.items.2'), link: '#' },
    { title: t('footer.info.consoles.items.3'), link: '#' },
    { title: t('footer.info.consoles.items.4'), link: '#' },
    { title: t('footer.info.consoles.items.5'), link: '#' },
    { title: t('footer.info.consoles.items.6'), link: '#' },
  ];

  return (
    <div>
      <h3 className={styles.title}>{t('footer.info.consoles.title')}</h3>

      <ul>
        {consoles.map(({ title, link }, index) => (
          <li className={styles.item} key={index}>
            <a className={styles.link} href={link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterInfoConsoles;
