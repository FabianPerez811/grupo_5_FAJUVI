import react from "react";
import TarjetaTotal from "./TarjetaTotal";
import Grafico from "../img/grafico.png";

function ContenidoInicial() {
  return (
    <div className="contenidoInicial">
      <div className="panelTotales">
        <p>Totales</p>
        <div className="tarjetasTotales">
          
          <TarjetaTotal colors="verde" icono="fa-cubes" titulo="Productos" total="50"/>
          <TarjetaTotal colors="celeste" icono="fa-list" titulo="Categorías" total="4"/>
          <TarjetaTotal colors="violeta" icono="fa-user-friends" titulo="Usuarios" total="46"/>
         
        </div>
      </div>
      <div className="imgPanelTotales">
        <img src={Grafico} alt="" />
      </div>
    </div>
  );
}

export default ContenidoInicial;
