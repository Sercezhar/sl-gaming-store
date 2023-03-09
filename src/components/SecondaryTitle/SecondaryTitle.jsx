import styles from './SecondaryTitle.module.css';

function SecondaryTitle({ children, text }) {
  return (
    <h2 className={styles.title}>
      <span>{children}</span>
      {text}
    </h2>
  );
}

export default SecondaryTitle;
