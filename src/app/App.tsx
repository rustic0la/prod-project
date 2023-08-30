import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isMounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
