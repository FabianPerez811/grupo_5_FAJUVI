import react from "react";


function ItemProducto(props) {
  return (
    <div className="itemProducto">
      <div className="imgPanelListado">
        <img src={props.img} alt="" />
      </div>
      <div className="cajaInfoProducto">
        <div className="tituloProducto">{props.titulo}</div>
        <div className="cajaStock">{props.stock}</div>
        <div className="descripcion">{props.description}</div>
        <div className="precio">{props.precio}</div>
        <div className="cajaEditar">
          <i className={"fas "+props.IconoEditar}></i>
        </div>
        <div className="cajaBorrar">
          <i className={"fas "+props.Borrar}></i>
        </div>
      </div>
    </div>
  );
}

export default ItemProducto;
