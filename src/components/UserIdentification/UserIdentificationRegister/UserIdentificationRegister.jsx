import PasswordToggler from '@/components/PasswordToggler/PasswordToggler';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdPassword, MdPerson } from 'react-icons/md';
import styles from '../UserIdentification.module.css';

function UserIdentificationRegister({
  setIsRegistered,
  isPassVisible,
  setIsPassVisible,
}) {
  const [t] = useTranslation('global');

  return (
    <form>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="name">
          <MdPerson size={20} color="#fff" />
          {t('userForm.name')}
        </label>
        <input className={styles.input} type="text" id="name" />
      </div>

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
        <input className={styles.checkbox} type="checkbox" id="agreement" />
        <label className={styles.checkboxLabel} htmlFor="agreement">
          {t('userForm.agreement.label')}&nbsp;
        </label>
        <a className={styles.linkTerms} href="#">
          {t('userForm.agreement.link')}
        </a>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.buttonSubmit} type="submit">
          {t('userForm.signUp')}
        </button>
        <button
          className={styles.buttonRegister}
          type="button"
          onClick={() => {
            setIsRegistered(true);
            setIsPassVisible(false);
          }}
        >
          {t('userForm.signIn')}
        </button>
      </div>
    </form>
  );
}

export default UserIdentificationRegister;
