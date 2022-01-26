import react from 'react';

import ContenidoInicial from './ContenidoInicial';
import ContenidoMedio from './ContenidoMedio';
import ContenidoInferior from './ContenidoInferior';

function PanelAdministrador() {
  return (
    <div className="panelAdministrador">
      <p className="titulo">Dashboard Fajuvi</p>    
      <ContenidoInicial/>
      <ContenidoMedio/>
      <ContenidoInferior/>
    </div> 
          
  );
}

export default PanelAdministrador;
