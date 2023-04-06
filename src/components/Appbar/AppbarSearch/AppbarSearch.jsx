import { IoSearch } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import styles from './AppbarSearch.module.css';

function AppbarSearch() {
  const [t] = useTranslation('global');

  return (
    <form className={styles.form}>
      <label htmlFor="search"></label>
      <input
        className={styles.input}
        type="text"
        id="search"
        placeholder={t('header.placeholder')}
        autoComplete="off"
      />

      <button className={styles.button}>
        <IoSearch size={20} color="#fff" />
      </button>
    </form>
  );
}

export default AppbarSearch;
