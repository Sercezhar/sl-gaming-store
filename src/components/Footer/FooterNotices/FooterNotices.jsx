import styles from './FooterNotices.module.css';

function FooterNotices() {
  return (
    <div className={styles.notices}>
      <p>Gaming Store © 2014-2023. All Rights Reserved</p>
      <nav className={styles.navigation}>
        <a className={styles.link} href="#">
          Help
        </a>
        <a className={styles.link} href="#">
          Contact Us
        </a>
      </nav>
    </div>
  );
}

export default FooterNotices;
