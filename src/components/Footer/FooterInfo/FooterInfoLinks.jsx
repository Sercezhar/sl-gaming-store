import styles from './FooterInfo.module.css';

function FooterInfoLinks({ t }) {
  const links = [
    { title: t('footer.info.links.items.0'), link: '#' },
    { title: t('footer.info.links.items.1'), link: '#' },
    { title: t('footer.info.links.items.2'), link: '#' },
    { title: t('footer.info.links.items.3'), link: '#' },
    { title: t('footer.info.links.items.4'), link: '#' },
  ];

  return (
    <div>
      <h3 className={styles.title}>{t('footer.info.links.title')}</h3>

      <ul>
        {links.map(({ title, link }, index) => (
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

export default FooterInfoLinks;
