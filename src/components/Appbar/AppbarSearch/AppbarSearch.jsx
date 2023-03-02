import { IoSearch } from 'react-icons/io5';
import styles from './AppbarSearch.module.css';

function AppbarSearch() {
  return (
    <form className={styles.form}>
      <label htmlFor="search"></label>
      <input
        className={styles.input}
        type="text"
        id="search"
        placeholder="Search the entire store"
        autoComplete="off"
      />

      <button className={styles.button}>
        <IoSearch size={20} color="#fff" />
      </button>
    </form>
  );
}

export default AppbarSearch;
