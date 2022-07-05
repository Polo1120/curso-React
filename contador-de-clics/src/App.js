import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import feecodecamplogo from './img/freecodecamp-logo.png';
import { useState } from 'react'

function App() {

  const [numClic, setNumClic] = useState(0);

  const manejarClic = () => {
    setNumClic(numClic + 1);
  };

  const reiniciarContador = () => {
    setNumClic(0);
  };


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo"
          src={feecodecamplogo}
          alt="logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">

        <Contador numClic={numClic}

        />

        <Boton
          text="Clic"
          botonClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          text="Reiniciar"
          botonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
