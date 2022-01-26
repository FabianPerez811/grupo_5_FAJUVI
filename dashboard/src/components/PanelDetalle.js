import react from 'react';

function PanelDetalle(props) {
  return (

        <div className="panelDetalle">
            <img src={props.img} alt="a" />
            <div className="infoPanelDetalle">
              <p>{props.titulo}</p>
              <p><b>{props.subtitulo}</b></p>
            </div>
        </div>

  );
}

export default PanelDetalle;
