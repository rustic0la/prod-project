import React, { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  L = 'size-l',
  M = 'size-m',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.OUTLINE,
  square,
  size = ButtonSize.M,
  disabled,
  ...props
}) => {
  const modes = {
    [cls[theme]]: true,
    [cls.square]: square || false,
    [cls[size]]: true,
    [cls.disabled]: disabled || false,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, modes, [className || '', cls[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
