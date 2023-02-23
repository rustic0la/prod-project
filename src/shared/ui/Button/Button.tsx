import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => (
  <button
    type="button"
    className={classNames(cls.button, {}, [className, cls[theme]])}
    {...props}
  >
    {children}
  </button>
);
