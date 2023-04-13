import PasswordToggler from '@/components/PasswordToggler/PasswordToggler';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdPassword, MdPerson } from 'react-icons/md';
import * as yup from 'yup';
import styles from '../UserIdentification.module.css';

function UserIdentificationRegister({
  setIsRegistered,
  isPassVisible,
  setIsPassVisible,
}) {
  const [t] = useTranslation('global');

  const registerSchema = yup.object().shape({
    name: yup.string().required(t('userForm.errors.reg.name')),
    email: yup
      .string()
      .email(t('userForm.errors.reg.email.valid'))
      .required(t('userForm.errors.reg.email.req')),
    password: yup
      .string()
      .required(t('userForm.errors.reg.password.req'))
      .min(6, t('userForm.errors.reg.password.length')),
    agreement: yup.boolean().oneOf([true], t('userForm.errors.reg.agreement')),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="name">
          <MdPerson size={20} color="#fff" />
          {t('userForm.name')}
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          {...register('name')}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

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

      <div
        className={styles.rowCheck}
        style={{
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex' }}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="agreement"
            {...register('agreement')}
          />
          <label className={styles.checkboxLabel} htmlFor="agreement">
            {t('userForm.agreement.label')}&nbsp;
          </label>
          <a className={styles.linkTerms} href="#">
            {t('userForm.agreement.link')}
          </a>
        </div>
        {errors.agreement && (
          <p className={styles.error} style={{ padding: '0' }}>
            {errors.agreement.message}
          </p>
        )}
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
