import type { FC, ReactNode } from 'react';

interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

const Header: FC<HeaderProps> = ({ title = 'Kelea', children }) => (
  <header className="header">
    <div className="header-content">
      <h1>{title}</h1>
      {children}
    </div>
  </header>
);

export default Header;
