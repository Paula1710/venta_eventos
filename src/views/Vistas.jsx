import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Event } from "../components/Event";
import { EventContext } from "../context/EventContext";
import Navbar from "../components/Navbar";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../styles/eventContext.css";

export const Vistas = () => {

    const { tipos } = useParams();
    const { events } = useContext(EventContext);
    const eventosTipos = events.filter(event => event.nombre.toLowerCase().includes(tipos));
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="evento-container">
                {
                    eventosTipos.length > 0 ? (
                        eventosTipos.map((event, index) => (
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
