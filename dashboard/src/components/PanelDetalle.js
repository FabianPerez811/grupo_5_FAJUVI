import react from 'react';

function PanelDetalle(props) {
  return (


    <div className="panelDetalle">
      <div className="infoPanelDetalle">
        <p>{props.titulo}</p>
        <p><b>{props.subtitulo}</b></p>        
        <div><img src={'http://localhost:3030' + (props.isUser ? '/img/img_users/' : '') + props.image} /></div>
      </div>
    </div>

  );
}

export default PanelDetalle;
