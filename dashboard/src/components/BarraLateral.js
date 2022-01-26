import react from 'react';
import Logo from '../img/Logo-Fajuvi.png'

function BarraLateral() {
  return (
    <div className="barraLateral">
          <nav>
            <ul>
              <li className="itemPanel">
                <div className="logo"><img src={Logo} alt="logo" /></div>
              </li>
              <li className="itemPanel">
                <a href="/">
                  <i className="fas fa-clipboard-list"></i>
                  <div>Productos</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/">
                  <i className="fas fa-filter"></i>
                  <div>Categorías</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/">
                  <i className="fas fa-chart-pie"></i>
                  <div>Estadística</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/">
                  <i className="fas fa-users"></i>
                  <div>Clientes</div>
                </a>
              </li>
            </ul>
            <ul>
              <li className="itemPanel">
                <a href="/">
                  <i className="fas fa-question-circle"></i>
                  <div>Ayuda</div>
                </a>
              </li>
              <li className="itemPanel">
                <a href="/">
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
