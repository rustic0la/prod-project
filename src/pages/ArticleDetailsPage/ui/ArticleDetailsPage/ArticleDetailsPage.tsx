import { classNames } from 'shared/lib/helpers/classNames';
import { FC, memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => (
  <div className={classNames(cls.ArticleDetailsPage, {}, [className || ''])}>
    Article details page
  </div>
);

export default memo(ArticleDetailsPage);
