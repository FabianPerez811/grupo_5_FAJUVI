import react from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo-Fajuvi.png';

function BarraLateral() {
  return (

    <div className="barraLateral">
      <nav>
        <ul>
          <li className="itemPanel">
            <Link to="/">
              <div className="logo"><img src={Logo} alt="logo" /></div>
            </Link>
          </li>
          <li className="itemPanel">
            <Link to="/lista-productos">
              <i className="fas fa-clipboard-list"></i>
              <div>Listado de Productos</div>
            </Link>
          </li>
          <li className="itemPanel">
            <Link to="/totales">
              <i className="fas fa-filter"></i>
              <div>Totales</div>
            </Link>
          </li>
          <li className="itemPanel">
            <Link to="/ultimas-cargas">
              <i className="fas fa-chart-pie"></i>
              <div>Ultimas cargas</div>
            </Link>
          </li>
          <li className="itemPanel">
            <Link to="/stock-categorias">
              <i className="fas fa-users"></i>
              <div>Stock de Categoría</div>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="itemPanel">
            <Link to="/">
              <i className="fas fa-question-circle"></i>
              <div>Ayuda</div>
            </Link>
          </li>
          <li className="itemPanel">
            <Link to="/">
              <i className="fas fa-cogs"></i>
              <div>Configuración</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>

  );
}

export default BarraLateral;
