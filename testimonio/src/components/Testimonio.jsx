import "../stylesheets/Testimonio.css"
import React from 'react';

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../image/Testimonio-${props.imagen}.png`)}
        alt="imagen " />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> 
        <strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} in <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio