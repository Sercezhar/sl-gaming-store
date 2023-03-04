import styles from './Divider.module.css';

function Divider({ marginBottom }) {
  return (
    <div style={{ marginBottom }}>
      <span className={styles.line}></span>
    </div>
  );
}

export default Divider;
