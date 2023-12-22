import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import BotonEspecifico from "./BotonEpecifico";
import "../styles/buscador.css";

export const Buscador = () => {

  let contenido = "EVENTOS";
  const { events } = useContext(EventContext);
  const [searchTermino, setSearchTermino] = useState('');
  const [searchResultados, setSearchResultados] = useState([]);

  useEffect(() => {
    const filtradoResultados = events.filter(event =>
      event.nombre.toLowerCase().includes(searchTermino.toLowerCase())
    );

    setSearchResultados(filtradoResultados);
  }, [searchTermino, events]);

  const searchCambio = event => {
    setSearchTermino(event.target.value);
  };
  return (
    <div className="buscador-container">
      <div className="buscador-button">
        <Link to={`/events`}>
          <BotonEspecifico contenido={contenido}></BotonEspecifico>
        </Link>
      </div>
      <input className="buscador-input" type="text" placeholder="Buscar eventos..." value={searchTermino} onChange={searchCambio} />
      <ul className="buscador-filter">
        {searchResultados.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


