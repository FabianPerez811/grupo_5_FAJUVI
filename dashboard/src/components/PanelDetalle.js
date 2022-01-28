import react from 'react';

function PanelDetalle(props) {
  return (
    

        <div className="panelDetalle">            
            <div className="infoPanelDetalle">
              <p>{props.titulo}</p>
              <p><b>{props.subtitulo}</b></p>
              <p>{props.description}</p>
            </div>
        </div>

  );
}

export default PanelDetalle;
