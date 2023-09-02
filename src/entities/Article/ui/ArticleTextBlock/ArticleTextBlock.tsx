import { classNames } from 'shared/lib/helpers/classNames';
import React, { FC } from 'react';
import { Text } from 'shared/ui';
import cls from './ArticleTextBlock.module.scss';
import { ArticleTextBlock as ArticleTextBlockProp } from '../../model/types/article';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockProp;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = ({
  className,
  block,
}) => (
  <div className={classNames(cls.ArticleTextBlock, {}, [className || ''])}>
    {block.title && <Text title={block.title} className={cls.title} />}
    {block.paragraphs.map((paragraph) => (
      <Text text={paragraph} className={cls.paragraph} key={paragraph} />
    ))}
  </div>
);
