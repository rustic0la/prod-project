import { FC, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, size, alt }) => {
  const styles = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return <img className={cls.avatar} style={styles} src={src} alt={alt} />;
};
