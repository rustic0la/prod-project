import { classNames } from 'shared/lib/helpers/classNames';
import { FC, memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui';
import CopySvg from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo(({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className || ''])}>
      <Button
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <CopySvg className={cls.img} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
