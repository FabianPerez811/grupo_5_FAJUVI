import react from 'react';
import PanelCategorias from './PanelCategorias';
import PanelListado from './PanelListado';


function ContenidoInferior() {
  return (

    <div className="contenidoInferior">
       <PanelCategorias />
       <PanelListado />
    </div>
   
  );
}

export default ContenidoInferior;
