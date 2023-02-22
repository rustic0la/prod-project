import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ThemeButton } from './Button';

describe('testing button', () => {
  test('test render', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
