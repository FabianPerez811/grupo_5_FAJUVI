import react from "react";

function Categoria(props) {
  return (
        <tr>
          <td>{props.cat}</td>
          <td>{props.total}</td>
        </tr>  
  );
}

export default Categoria;
