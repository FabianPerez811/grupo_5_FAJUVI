import react from 'react';
import Logo from '../img/Logo-Fajuvi.png'
import PanelListado from './PanelListado';
import ContenidoMedio from './ContenidoMedio';
import ContenidoInicial from './ContenidoInicial';
import PanelCategorias from './PanelCategorias';
import {Routes, Route, Link} from 'react-router-dom';

function BarraLateral() {
  return (
    <div className="barraLateral">
          <nav>
            <ul>
              <li className="itemPanel">
                <div className="logo"><img src={Logo} alt="logo" /></div>
              </li>
              <li className="itemPanel">
                <Link to="/PanelListado">
                  <i className="fas fa-clipboard-list"></i>
                  <div>Listado de Productos</div>
                </Link>
              </li>
              <li className="itemPanel">
                <Link to="/ContenidoInicial">
                  <i className="fas fa-filter"></i>
                  <div>Totales</div>
                </Link>
              </li>
              <li className="itemPanel">
                <Link to="/ContenidoMedio">
                  <i className="fas fa-chart-pie"></i>
                  <div>Ultimas cargas</div>
                </Link>
              </li>
              <li className="itemPanel">
                <Link to="/PanelCategorias">
                  <i className="fas fa-users"></i>
                  <div>Stock de Categoría</div>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="itemPanel">
                <Link to="#">
                  <i className="fas fa-question-circle"></i>
                  <div>Ayuda</div>
                </Link>
              </li>
              <li className="itemPanel">
                <Link to="#">
                  <i className="fas fa-cogs"></i>
                  <div>Configuración</div>
                </Link>
              </li>
            </ul>
          </nav>
              <Routes>
                <Route path="/PanelListado">
                    <PanelListado />
                </Route>
                <Route path="/ContenidoInicial">
                    <ContenidoInicial />
                </Route>
                <Route path="/ContenidoMedio">
                    <ContenidoMedio />
                </Route>
                <Route path="/PanelCategorias">
                    <PanelCategorias />
                </Route>
              </Routes>
        </div>
  );
}

export default BarraLateral;
