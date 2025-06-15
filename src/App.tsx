import { Routes, Route, Link } from 'react-router-dom';
import Header from './adapters/components/Header/Header';

function Home() {
  return <h2>Inicio</h2>;
}

function About() {
  return <h2>Acerca de</h2>;
}

function App() {
  return (
    <div>
      <Header title="Viceroy">
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
