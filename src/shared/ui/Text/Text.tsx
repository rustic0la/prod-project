import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  CENTER = 'CENTER',
}

interface TextProps {
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  className?: string;
}

export const Text: FC<TextProps> = memo(
  ({
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    className,
  }: TextProps) => {
    const mods: Mods = {
      [cls[theme]]: true,
      [cls[align]]: true,
    };

    return (
      <div className={classNames('', mods, [className || ''])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
