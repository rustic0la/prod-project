import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Text',
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  children: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
