import type { FC } from 'react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import '../../../styles/pages/_not-found.scss';

const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/login', label: 'Iniciar Sesión' },
  { href: '/register', label: 'Registrarse' },
];

const NotFound: FC = () => {
  return (
    <div className="not-found-page">
      <Header>
        <Navigation links={navigationLinks} />
      </Header>

      <main className="not-found-content">
        <div className="not-found-container">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Página no encontrada</h2>
          <p className="error-message">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>
          <a href="/" className="btn-primary">
            Volver al Inicio
          </a>
        </div>
      </main>

      <footer className="not-found-footer">
        <p>&copy; 2025 Kelea - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default NotFound;
