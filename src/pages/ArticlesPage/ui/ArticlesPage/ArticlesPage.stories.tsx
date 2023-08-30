import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

export default {
  title: 'ArticlesPage',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
