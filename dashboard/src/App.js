import logo from './logo.svg';
import './App.css';
import BarraNav from './components/BarraNav';
import CajaContenido from './components/CajaContenido';

function App() {
  return (
    <div className="cajaContenedora">
      <BarraNav />
      <CajaContenido />
    </div>
  );
}

export default App;
