import react from "react";
import Categoria from "./Categoria";

function PanelCategorias(props) {

    /*CONSULTA CON LA API {{pulseras,2},{anillos,3} */ 

  return (
    <div className="panelCategorias">
      <p>Productos</p>
      <table>
        <tr>
          <th>Categoría</th>
          <th>Stock</th>
        </tr>
        <Categoria cat="Pulseras" total="3"/>
        <Categoria cat="Aros" total="5"/>
        <Categoria cat="Anillos" total="2"/>
        <Categoria cat="Cintos" total="5"/>

        {/*categotrias.map((cat)=>{
            <Categoria cat="cat.nombre" total="cat.total"/>
        })*/}
        
      </table>
    </div>
  );
}

export default PanelCategorias;
