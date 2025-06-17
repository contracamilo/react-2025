import type { FC } from 'react';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import '../../../styles/pages/_login.scss';

const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/register', label: 'Registrarse' },
];

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Here you would typically call an API to authenticate
    console.log('Login attempt with:', { email });

    // Clear error
    setError(null);
  };

  return (
    <div className="login-page">
      <Header>
        <Navigation links={navigationLinks} />
      </Header>

      <main className="login-content">
        <div className="login-container">
          <h1>Iniciar Sesión</h1>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Iniciar Sesión
              </button>
            </div>

            <div className="form-footer">
              <p>
                ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
              </p>
            </div>
          </form>
        </div>
      </main>

      <footer className="login-footer">
        <p>&copy; 2025 Kelea - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Login;
