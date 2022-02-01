import react from 'react';
import Logo from '../img/Logo-Fajuvi.png';

function BarraLateral() {
  return (
    
    <div className="barraLateral">
          <nav>
            <ul>
              <li className="itemPanel">
                <div className="logo"><img src={Logo} alt="logo" /></div>
              </li>
              <li className="itemPanel">
                <a href="/PanelListado">
                  <i className="fas fa-clipboard-list"></i>
                  <div>Listado de Productos</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/ContenidoInicial">
                  <i className="fas fa-filter"></i>
                  <div>Totales</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/ContenidoMedio">
                  <i className="fas fa-chart-pie"></i>
                  <div>Ultimas cargas</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/PanelCategorias">
                  <i className="fas fa-users"></i>
                  <div>Stock de Categoría</div>
                </a>
              </li>
            </ul>
            <ul>
              <li className="itemPanel">
                <a href="#">
                  <i className="fas fa-question-circle"></i>
                  <div>Ayuda</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="#">
                  <i className="fas fa-cogs"></i>
                  <div>Configuración</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      
  );
}

export default BarraLateral;
