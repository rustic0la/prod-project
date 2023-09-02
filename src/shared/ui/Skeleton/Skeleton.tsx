import { classNames } from 'shared/lib/helpers/classNames';
import { CSSProperties, FC, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo(
  ({ className, height, width, border }) => {
    const styles: CSSProperties = {
      width,
      height,
      borderRadius: border,
    };

    return (
      <div
        className={classNames(cls.Skeleton, {}, [className || ''])}
        style={styles}
      />
    );
  }
);
