import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
