import styles from './FooterInfo.module.css';

const consoles = [
  { title: 'Pre Order', link: '#' },
  { title: 'Play Station 5', link: '#' },
  { title: 'Xbox Series X/S', link: '#' },
  { title: 'New Releases', link: '#' },
  { title: 'Best Sellers', link: '#' },
  { title: 'Prepaid Cards', link: '#' },
  { title: 'Consoles & Accessories', link: '#' },
];

function FooterInfoConsoles() {
  return (
    <div>
      <h3 className={styles.title}>Consoles</h3>

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
