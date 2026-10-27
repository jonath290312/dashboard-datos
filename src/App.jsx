import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <main className="contenido">
        <h2>Bienvenido al Dashboard</h2>
        <p>
          Entorno frontend configurado correctamente
          con React y Vite.
        </p>
      </main>
    </div>
  );
}

export default App;