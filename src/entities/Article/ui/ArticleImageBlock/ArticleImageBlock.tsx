import { classNames } from 'shared/lib/helpers/classNames';
import { FC } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlock.module.scss';
import { ArticleImageBlock as ArticleImageBlockProp } from '../../model/types/article';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockProp;
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = ({
  className,
  block,
}) => (
  <div className={classNames(cls.ArticleImageBlock, {}, [className || ''])}>
    <img src={block.src} alt={block.title} className={cls.img} />
    {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
  </div>
);
