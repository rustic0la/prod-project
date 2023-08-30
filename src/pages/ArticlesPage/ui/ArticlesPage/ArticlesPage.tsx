import { classNames } from 'shared/lib/helpers/classNames';
import { FC, memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => (
  <div className={classNames(cls.ArticlesPage, {}, [className || ''])}>
    Article page
  </div>
);

export default memo(ArticlesPage);
