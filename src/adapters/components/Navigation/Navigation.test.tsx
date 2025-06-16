import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation } from './Navigation';
import { MemoryRouter } from 'react-router-dom';

const links = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation links={links} />
      </MemoryRouter>,
    );
    links.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('renders children inside the navigation', () => {
    render(
      <MemoryRouter>
        <Navigation links={links}>
          <span data-testid="custom-child">Custom Child</span>
        </Navigation>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('custom-child')).toBeInTheDocument();
  });

  it('renders correct hrefs for each link', () => {
    render(
      <MemoryRouter>
        <Navigation links={links} />
      </MemoryRouter>,
    );
    links.forEach((link) => {
      const anchor = screen.getByText(link.label).closest('a');
      expect(anchor).toHaveAttribute('href', link.href);
    });
  });

  it('renders empty list when no links are provided', () => {
    render(
      <MemoryRouter>
        <Navigation links={[]} />
      </MemoryRouter>,
    );
    // Only children (if any) should be rendered
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navigation links={links} />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
