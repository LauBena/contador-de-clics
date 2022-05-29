import React from 'react';

function Boton({ texto, botonDeClick, manejarClic }) {
    return (
        <button
        clasName={ botonDeClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;