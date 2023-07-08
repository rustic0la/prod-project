import { useTheme, Theme } from 'app/providers/ThemeProvider';
import React, { memo, type FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui';
import { ButtonTheme } from '../..';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher: FC = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});
