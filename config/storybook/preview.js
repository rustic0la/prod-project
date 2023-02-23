import { addDecorator } from '@storybook/react';
import { StyleDecorator } from './StyleDecorator/StyleDecorator';
import { RouterDecorator } from './RouterDecorator/RouterDecorator';
import { ThemeDecorator } from './ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
