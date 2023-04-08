import classNames from 'classnames/bind';
import { MdClose } from 'react-icons/md';
import Divider from '../Divider/Divider';
import styles from './Modal.module.css';

let cx = classNames.bind(styles);

function Modal({ children, isModal, handleCloseModal, title }) {
  let holderClasses = cx({
    holder: true,
    isOpen: isModal,
  });

  let backdropClasses = cx({
    backdrop: true,
    isOpen: isModal,
  });

  return (
    <div className={styles.modal}>
      <div className={backdropClasses} onClick={() => handleCloseModal()}></div>

      <div className={holderClasses}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleCloseModal()}
          >
            <MdClose size={26} color="#fff" />
          </button>
        </div>

        <Divider marginBottom="0px" />

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
