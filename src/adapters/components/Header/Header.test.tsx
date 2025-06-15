import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders with default title', () => {
    render(<Header />);
    const headingElement = screen.getByText('Kelea');
    expect(headingElement).toBeTruthy();
  });

  test('renders with custom title', () => {
    const testTitle = 'Test Title';
    render(<Header title={testTitle} />);
    const headingElement = screen.getByText(testTitle);
    expect(headingElement).toBeTruthy();
  });

  test('renders children correctly', () => {
    render(
      <Header>
        <div data-testid="test-children">Test Children</div>
      </Header>,
    );
    const childrenElement = screen.getByTestId('test-children');
    expect(childrenElement).toBeTruthy();
    expect(childrenElement.textContent).toBe('Test Children');
  });

  test('has header class', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement.className).toContain('header');
  });
});
