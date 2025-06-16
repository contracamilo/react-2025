import { Routes, Route } from 'react-router-dom';
import { Header, Navigation } from './adapters';

function Home() {
  return <h2>Inicio</h2>;
}

function About() {
  return <h2>Acerca de</h2>;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function App() {
  return (
    <div>
      <Header title="Viceroy">
        <Navigation links={links} />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
