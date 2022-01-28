import react, { useEffect, useState } from "react";
import TarjetaTotal from "./TarjetaTotal";
import Grafico from "../img/grafico.png";

function ContenidoInicial() {

  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setProduct(d);
      });

    fetch('http://localhost:3030/api/users')
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setUser(d);
      });
  }, []);
  return (
    <div className="contenidoInicial">
      <div className="panelTotales">
        <p>Totales</p>
        <div className="tarjetasTotales">
          
          <TarjetaTotal colors="verde" icono="fa-cubes" titulo="Productos" total={product?.count}/>
          <TarjetaTotal colors="celeste" icono="fa-list" titulo="Categorías" total={product?.count}/>
          <TarjetaTotal colors="violeta" icono="fa-user-friends" titulo="Usuarios" total={user?.count}/>
         
        </div>
      </div>
      <div className="imgPanelTotales">
        <img src={Grafico} alt="" />
      </div>
    </div>
  );
}

export default ContenidoInicial;
