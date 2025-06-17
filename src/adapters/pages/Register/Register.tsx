import type { FC } from 'react';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';
import '../../../styles/pages/_register.scss';

const navigationLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/login', label: 'Iniciar Sesión' },
];

const Register: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Por favor, completa todos los campos obligatorios');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Here you would typically call an API to register the user
    console.log('Registration attempt with:', {
      name: formData.name,
      email: formData.email,
    });

    // Clear error
    setError(null);
  };

  return (
    <div className="register-page">
      <Header>
        <Navigation links={navigationLinks} />
      </Header>

      <main className="register-content">
        <div className="register-container">
          <h1>Crear Cuenta</h1>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Crear Cuenta
              </button>
            </div>

            <div className="form-footer">
              <p>
                ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
              </p>
            </div>
          </form>
        </div>
      </main>

      <footer className="register-footer">
        <p>&copy; 2025 Kelea - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Register;
