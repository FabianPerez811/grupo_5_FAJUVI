import react from 'react';
import BarraLateral from './BarraLateral';
import PanelAdministrador from './PanelAdministrador';


function CajaContenido() {
  return (
    <div className="cajaContenido">
        <BarraLateral />
        <PanelAdministrador />
    </div>
  );
}

export default CajaContenido;
