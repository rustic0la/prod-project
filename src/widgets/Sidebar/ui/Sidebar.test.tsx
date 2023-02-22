import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('testing button', () => {
  test('with only parameter', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
