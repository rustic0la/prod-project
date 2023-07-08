import { FC, memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = memo(
  ({ title, text, theme = TextTheme.PRIMARY }: TextProps) => (
    <div className={cls[theme]}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
);
