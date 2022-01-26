import react from "react";
import ItemProducto from "./ItemProducto"

import Cinto from '../img/cinto.jpg';
import Collar from '../img/collar3.jpg';
import Pulsera from '../img/pulsera.jpg';

function PanelListado(props) {
  return (
    <div className="panelListado">
      <p>Listado de Productos</p>

      <ItemProducto img={Cinto} titulo="Cinto Black" stock="stock: 2" description="Cinto de cuero" precio="Precio: $2500" IconoEditar="fa-pen" Borrar="fa-trash-alt"/>
      <ItemProducto img={Collar} titulo="Collar perlas" stock="stock: 4" description="Collar fantasia de perlas" precio="Precio: $2000" IconoEditar="fa-pen" Borrar="fa-trash-alt"/>
      <ItemProducto img={Pulsera} titulo="Pulsera Florencia" stock="stock: 9" description="Realizada con perlas y piedras de fantasia" precio="Precio: $500" IconoEditar="fa-pen" Borrar="fa-trash-alt"/>
      

    </div>
  );
}

export default PanelListado;
