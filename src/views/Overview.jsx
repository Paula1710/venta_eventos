import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Event } from "../components/Event";
import { EventContext } from "../context/EventContext";
import BotonEspecifico from '../components/BotonEpecifico';
import Navbar from '../components/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../styles/eventContext.css";


export const Overview = () => {

    let contenido_inicio = "INICIO";
    let contenido_buscar = "BUSCADOR";
    const { events } = useContext(EventContext);

    return (
        <div>
            <div className="contenedor-principal">
                <Link to={`/`}>
                    <BotonEspecifico contenido={contenido_inicio}></BotonEspecifico>
                </Link>
                <h1 className="center-text">Eventos disponibles</h1>
                <Link to={`/events/search`}>
                    <BotonEspecifico contenido={contenido_buscar}></BotonEspecifico>
                </Link>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="evento-container">
                {
                    events.length > 0 ? (
                        events.map((event, index) => (
                            <Event
                                key={index}
                                id={event.id}
                                nombre={event.nombre}
                                empresa={event.empresa}
                                fecha_hora={event.fecha_hora}
                                ubicacion={event.ubicacion}
                                precio={event.precio}
                                descripcion={event.descripcion}
                                imagen={event.imagen}
                            />
                        ))
                    ) : (
                        <Box display="flex" alignItems="center" justifyContent="center" minHeight="200px">
                            <CircularProgress size={100} style={{ color: 'orange' }} />
                        </Box>
                    )
                }
                { }
            </div>
        </div>
    );
}