import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

interface NavigationProps {
  links: { href: string; label: string }[];
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ links, children }) => {
  return (
    <nav className="navigation">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
};
