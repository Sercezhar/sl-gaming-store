import PasswordToggler from '@/components/PasswordToggler/PasswordToggler';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdPassword } from 'react-icons/md';
import * as yup from 'yup';
import styles from '../UserIdentification.module.css';

function UserIdentificationAuth({
  setIsRegistered,
  isPassVisible,
  setIsPassVisible,
}) {
  const [t] = useTranslation('global');

  const authSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('userForm.errors.auth.email.valid'))
      .required(t('userForm.errors.auth.email.req')),
    password: yup
      .string()
      .required(t('userForm.errors.auth.password.req'))
      .min(6, t('userForm.errors.auth.password.length')),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="email">
          <MdEmail size={20} color="#fff" />
          {t('userForm.email')}
        </label>
        <input
          className={styles.input}
          type="text"
          id="email"
          {...register('email')}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
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
            {...register('password')}
          />
          <PasswordToggler
            isPassVisible={isPassVisible}
            setIsPassVisible={setIsPassVisible}
          />
        </div>
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
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
