import { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, src, size, alt }) => {
  const styles = useMemo(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      className={classNames(cls.avatar, {}, [className || ''])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};
