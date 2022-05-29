import './App.css';
import Boton from '../src/componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);

  const manejarClic = () => {
    setnumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setnumClics(0);
  };

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        botonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto='Reiniciar'
        botonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
