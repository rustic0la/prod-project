import { classNames } from 'shared/lib/helpers/classNames';
import { FC } from 'react';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlock.module.scss';
import { ArticleCodeBlock as ArticleCodeBlockProp } from '../../model/types/article';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockProp;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({
  className,
  block,
}) => (
  <div className={classNames(cls.ArticleCodeBlock, {}, [className || ''])}>
    <Code text={block.code} />
  </div>
);
