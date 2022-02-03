import react from 'react';
import { Routes, Route, Link } from "react-router-dom";
import BarraLateral from './BarraLateral';
import PanelAdministrador from './PanelAdministrador';
import PanelListado from './PanelListado';
import ContenidoInicial from './ContenidoInicial';
import ContenidoMedio from './ContenidoMedio';
import PanelCategorias from './PanelCategorias';
import NotFound from './NotFound';

function CajaContenido() {
  return (

    <div className="cajaContenido">
      <BarraLateral />
      <Routes>
        <Route path="/" element={<PanelAdministrador />} />
        <Route path="/lista-productos" element={<PanelListado />} />
        <Route path="/totales" element={<ContenidoInicial />} />
        <Route path="/ultimas-cargas" element={<ContenidoMedio />} />
        <Route path="/stock-categorias" element={< PanelCategorias />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default CajaContenido;
