import useClickOutside from '@/hooks/useClickOutside';
import classNames from 'classnames/bind';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from './AppbarActionsDropdown.module.css';

let cx = classNames.bind(styles);

function AppbarActionsDropdown({ array, currentState, setCurrentState }) {
  const { ref, isOpen, setIsOpen } = useClickOutside(false);

  function handleStateChange(value, lng) {
    setCurrentState(value, lng);
    setIsOpen(false);
  }

  let arrowClasses = cx({
    arrow: true,
    rotate: isOpen,
  });

  const itemClasses = index => {
    let classes = cx({
      item: true,
      active: currentState === index,
    });

    return classes;
  };

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
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {array.map(({ name, icon, tag }, index) => (
              <li
                className={itemClasses(index)}
                key={index}
                onClick={() => handleStateChange(index, tag)}
              >
                <svg className={styles.icon} width="20" height="20">
                  <use href={icon} />
                </svg>
                {name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default AppbarActionsDropdown;
