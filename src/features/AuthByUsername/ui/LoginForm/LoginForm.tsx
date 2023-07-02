import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { selectLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { selectLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { selectLoginLoding } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading';
import { selectLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector(selectLoginUsername);
  const password = useSelector(selectLoginPassword);
  const isLoading = useSelector(selectLoginLoding);
  const error = useSelector(selectLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginByUsername({
        username,
        password,
      })
    );
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.LoginForm)}>
        <Text title="Authorization form" />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          autoFocus
          placeholder="Username:"
          type="text"
          className={cls.input}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          placeholder="Password:"
          className={cls.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
