import react from "react";


function ItemProducto(props) {
  return (
    <div className="itemProducto">
      <div className="imgPanelListado">
        <img src={props.img} alt="foto" />
      </div>
      <div className="cajaInfoProducto">
        <div className="tituloProducto">{props.titulo}</div>
        <div className="descripcion">{props.description}</div>
        <div className="precio">{props.precio}</div>
      </div>
    </div>
  );
}

export default ItemProducto;
