import react, { useEffect, useState } from "react";
import ItemProducto from "./ItemProducto";

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
        img={p.image} titulo={p.name} description={p.description} precio={p.price}/>
      })}
    </div>
  );
}

export default PanelListado;
