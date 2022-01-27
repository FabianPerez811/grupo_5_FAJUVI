import react, { useEffect, useState } from "react";
import Categoria from "./Categoria";

function PanelCategorias(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('did mount');
    fetch('http://localhost:3030/api/products')
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        console.log(d.countByCategory);
        setData(d);
      });
  }, []);

  /*CONSULTA CON LA API {{pulseras,2},{anillos,3} */

  return (
    <div className="panelCategorias">
      <p>Productos</p>
      <table>
        <tbody>
          <tr>
            <th>Categoría</th>
            <th>Stock</th>
          </tr>

          {data && data.countByCategory.map((c, i) => {
            return <Categoria key={i} cat={c.category} total={c.count} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PanelCategorias;
