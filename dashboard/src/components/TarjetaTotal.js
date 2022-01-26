import react from "react";


function TarjetaTotal(props) {

  return (

          <div className="tarjetaTotal">
            <div>
              <i className={"fas "+props.icono+" "+props.colors}></i>
            </div>
            <div className="contenidoTarjeta">
              <div className="tituloTarjeta">{props.titulo}</div>
              <div className="subtituloTarjeta">{props.total}</div>
            </div>
          </div>
       
  );
}

export default TarjetaTotal;
