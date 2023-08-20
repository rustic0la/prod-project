import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/conponentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('testing Counter', () => {
  test('with only parameter', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('title')).toHaveTextContent('11');
  });

  test('with only parameter', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    userEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('title')).toHaveTextContent('9');
  });
});
