import React from "react";
import { Link } from "react-router-dom";
import BotonEspecifico from "./BotonEpecifico";
import "../styles/event.css";

export const Event = ({ id, nombre, empresa, fecha_hora, ubicacion, precio, descripcion, imagen }) => {
    let contenido = "COMPRAR";
    return (
        <div className="card_evento">
            <div className="card-image">
                <p>{imagen}</p>
            </div>
            <div className="card-content">
                <h3 >{nombre}</h3>
                <p>{fecha_hora}</p>
                <p>{ubicacion}</p>
                <Link to={`/events/${id}`}>
                    <BotonEspecifico contenido={contenido}></BotonEspecifico>
                </Link>
            </div>
        </div>
    );
}