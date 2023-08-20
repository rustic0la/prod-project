import { type FC, memo } from 'react';
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
  title?: string;
}

export const AppLink: FC<AppLinkProps> = memo(
  ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...props
  }: AppLinkProps) => (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className || '', cls[theme]])}
      {...props}
    >
      {children}
    </Link>
  )
);
