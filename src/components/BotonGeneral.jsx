import React from 'react';
import "../styles/botonGeneral.css";

const BotonGeneral = ({nombre}) => {
    return (
        <div>
            <button className="button-general">{nombre}</button>
        </div>
    )
};

export default BotonGeneral;