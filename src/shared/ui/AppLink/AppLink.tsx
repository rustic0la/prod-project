import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  title: string;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  title,
  theme = AppLinkTheme.PRIMARY,
  ...props
}) => (
  <Link
    to={to}
    className={classNames(cls.appLink, {}, [className, cls[theme]])}
    {...props}
  >
    {title}
  </Link>w
);
