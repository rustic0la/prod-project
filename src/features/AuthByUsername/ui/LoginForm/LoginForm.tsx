import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm)}>
      <Input type="text" className={cls.input} />
      <Input type="text" className={cls.input} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
