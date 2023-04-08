import PasswordToggler from '@/components/PasswordToggler/PasswordToggler';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdPassword } from 'react-icons/md';
import styles from '../UserIdentification.module.css';

function UserIdentificationAuth({
  setIsRegistered,
  isPassVisible,
  setIsPassVisible,
}) {
  const [t] = useTranslation('global');

  return (
    <form>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="email">
          <MdEmail size={20} color="#fff" />
          {t('userForm.email')}
        </label>
        <input className={styles.input} type="text" id="email" />
      </div>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="password">
          <MdPassword size={20} color="#fff" />
          {t('userForm.password')}
        </label>
        <div className={styles.passwordWrapper}>
          <input
            className={styles.input}
            type={isPassVisible ? 'text' : 'password'}
            id="password"
          />
          <PasswordToggler
            isPassVisible={isPassVisible}
            setIsPassVisible={setIsPassVisible}
          />
        </div>
      </div>

      <div className={styles.rowCheck}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="remember"
          defaultChecked
        />
        <label className={styles.checkboxLabel} htmlFor="remember">
          {t('userForm.remember')}
        </label>
        <a className={styles.linkRemind} href="#">
          {t('userForm.remind')}
        </a>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.buttonSubmit} type="submit">
          {t('userForm.signIn')}
        </button>
        <button
          className={styles.buttonRegister}
          type="button"
          onClick={() => {
            setIsRegistered(false);
            setIsPassVisible(false);
          }}
        >
          {t('userForm.signUp')}
        </button>
      </div>
    </form>
  );
}

export default UserIdentificationAuth;
