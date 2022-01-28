import react, { useEffect, useState } from "react";
import ItemProducto from "./ItemProducto";
import Cinto from '../img/cinto.jpg';

function PanelListado(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
      });
  }, []);

  return (
    <div className="panelListado">
      <p>Listado de Productos</p>

      {data && data.products.map((p, i) => {
        return <ItemProducto key={i} 
        img={Cinto} titulo={p.name} description={p.description} />
      })}
    </div>
  );
}

export default PanelListado;
