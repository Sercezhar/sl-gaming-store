import useClickOutside from '@/hooks/useClickOutside';
import classNames from 'classnames/bind';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from './AppbarActionsDropdown.module.css';

let cx = classNames.bind(styles);

function AppbarActionsDropdown({ array, currentState, setCurrentState }) {
  const { ref, isOpen, setIsOpen } = useClickOutside(false);

  let arrowClasses = cx({
    arrow: true,
    rotate: isOpen,
  });

  function handleStateChange(value) {
    setCurrentState(value);
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        <svg
          className={styles.icon}
          style={{
            margin: '0',
          }}
          width="20"
          height="20"
        >
          <use href={array[currentState].icon} />
        </svg>

        <RiArrowDropDownLine className={arrowClasses} />
      </button>

      {isOpen ? (
        <ul className={styles.list}>
          {array.map(({ name, icon }, index) => (
            <li
              className={styles.item}
              key={index}
              onClick={() => handleStateChange(index)}
            >
              <svg className={styles.icon} width="20" height="20">
                <use href={icon} />
              </svg>
              {name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default AppbarActionsDropdown;
