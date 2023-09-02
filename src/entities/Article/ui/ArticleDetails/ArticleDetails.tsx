import { classNames } from 'shared/lib/helpers/classNames';
import { FC, memo, useCallback, useEffect } from 'react';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeSvg from 'shared/assets/icons/eye.svg';
import CalendarSvg from 'shared/assets/icons/calendar.svg';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
      if (__PROJECT__ === 'frontend') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchArticleById(id));
      }
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return <ArticleCodeBlock block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlock block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
          return <ArticleTextBlock block={block} key={block.id} />;
        default:
          return null;
      }
    }, []);

    let content;

    if (isLoading) {
      content = (
        <>
          <Skeleton
            className={cls.avatar}
            border="50%"
            height={150}
            width={150}
          />
          <Skeleton className={cls.title} height={32} width={300} />
          <Skeleton className={cls.skeleton} height={24} width={600} />
          <Skeleton className={cls.skeleton} height={150} width="100%" />
          <Skeleton className={cls.skeleton} height={150} width="100%" />
        </>
      );
    } else if (error) {
      content = <Text align={TextAlign.CENTER} title="Error occured" />;
    } else {
      content = (
        <>
          <div className={cls.avatarWrapper}>
            <Avatar
              src={article?.img || ''}
              size={150}
              className={cls.avatar}
            />
          </div>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <div className={cls.articleInfo}>
            <EyeSvg className={cls.icon} />
            <Text text={article?.views.toString()} />
          </div>
          <div className={cls.articleInfo}>
            <CalendarSvg className={cls.icon} />
            <Text text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </>
      );
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.ArticleDetails, {}, [className || ''])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);
