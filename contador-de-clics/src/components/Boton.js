import "../stylesheets/Boton.css"

function Boton({text, botonClic, manejarClic}){
  return(
    <button className={botonClic ? "boton-clic": "boton-reiniciar"}
    onClick={manejarClic}>
      {text}
    </button>
  );
}

export default Boton;