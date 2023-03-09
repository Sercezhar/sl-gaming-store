import styles from './Divider.module.css';

function Divider({ marginBottom = '28px' }) {
  return (
    <div className={styles.divider} style={{ marginBottom }}>
      <span className={styles.line}></span>
    </div>
  );
}

export default Divider;
