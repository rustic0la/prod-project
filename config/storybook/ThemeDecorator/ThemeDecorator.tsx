import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import React from 'react';
import { Theme } from '../../../src/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
