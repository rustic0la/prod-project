import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

import { Text, TextSize, TextTheme } from './Text';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'Text/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Text',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title Title Title Title',
  text: 'Text Text Text',
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title Title Title Title',
  text: 'Text Text Text',
  size: TextSize.L,
};
