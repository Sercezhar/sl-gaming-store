import styles from './FooterInfo.module.css';

const links = [
  { title: 'Help', link: '#' },
  { title: "FAQ's", link: '#' },
  { title: 'Contact Us', link: '#' },
  { title: 'My Account', link: '#' },
  { title: 'Privacy Policy', link: '#' },
];

function FooterInfoLinks() {
  return (
    <div>
      <h3 className={styles.title}>Quick links</h3>

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
