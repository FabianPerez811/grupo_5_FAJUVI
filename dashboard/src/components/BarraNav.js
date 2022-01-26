import react from 'react';
import Usuario from '../img/usuario.png'

function BarraNav() {
  return (
  <div className="barraNav">
    <div><i className="fas fa-cog"></i></div>
    <div><i className="fas fa-bell"></i></div>
    <div className="usuarioBarraNav">Hola, Mateo!</div>
    <img src={Usuario} alt="foto-usuario" />
  </div>
 
  );
}

export default BarraNav;
