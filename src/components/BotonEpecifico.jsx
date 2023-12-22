import React from 'react';
import "../styles/botonEspecifico.css";

const botonEspecifico = ({contenido}) => {
    return (
        <div>
            <button className="button-especifico">{contenido}</button>
        </div>
    )
};

export default botonEspecifico;