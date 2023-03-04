// import classNames from 'classnames/bind';
import styles from './Container.module.css';

// let cx = classNames.bind(styles);

function Container({ children }) {
  // let containerClasses = cx({
  //   container: true,
  //   resetPadding: resetPadding,
  //   grid: grid,
  // });

  return <div className={styles.container}>{children}</div>;
}

export default Container;
