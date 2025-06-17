import type { FC } from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import '../../../styles/pages/_home.scss';

const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/login', label: 'Iniciar Sesión' },
  { href: '/register', label: 'Registrarse' },
];

const Home: FC = () => {
  return (
    <div className="home-page">
      <Header>
        <Navigation links={navigationLinks} />
      </Header>

      <main className="home-content">
        <section className="hero">
          <h1>Bienvenido a Kelea</h1>
          <p className="subtitle">Tu plataforma de gestión favorita</p>
        </section>

        <section className="features">
          <h2>Características</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Gestión Intuitiva</h3>
              <p>Interfaz fácil de usar para todas tus necesidades</p>
            </div>
            <div className="feature-card">
              <h3>Análisis Detallado</h3>
              <p>Accede a reportes y análisis en tiempo real</p>
            </div>
            <div className="feature-card">
              <h3>Seguridad Avanzada</h3>
              <p>Tus datos siempre protegidos</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Kelea - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Home;
