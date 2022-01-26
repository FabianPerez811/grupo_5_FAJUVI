import react from 'react';
import Grafico2 from '../img/grafico2.png';
import Foto from '../img/foto.jpg';
import Profile from '../img/profile.png';
import PanelDetalle from './PanelDetalle';

function ContenidoMedio() {


  return (
    <div className="contenidoMedio">
        <div className="imgContenidoMedio">
            <img src={Grafico2} alt="" />
        </div>

        <PanelDetalle img={Foto} titulo="Último producto Cargado" subtitulo="Collar Rosario" />
        <PanelDetalle img={Profile} titulo="Último usuario Cargado" subtitulo="María Sanz"  />

    </div>
  );
}

export default ContenidoMedio;
