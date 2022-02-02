import react, { useEffect, useState } from "react";
import Grafico2 from '../img/grafico2.png';
import PanelDetalle from './PanelDetalle';

function ContenidoMedio() {
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
        console.log(d)
        setUser(d);
      });
  }, []);

  return (
    <div className="contenidoMedio">
      <div className="imgContenidoMedio">
        <img src={Grafico2} alt="" />
      </div>

      <PanelDetalle isUser={false} titulo="Último producto Cargado" subtitulo={product?.lastProduct.name}  image={product?.lastProduct.image}/>
      <PanelDetalle isUser={true} titulo="Último usuario Cargado" subtitulo={user?.lastUser.lastName}  image={user?.lastUser.profileImage}/>

    </div>
  );
}

export default ContenidoMedio;
