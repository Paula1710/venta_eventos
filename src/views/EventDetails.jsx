import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import { EntradasContext } from '../context/EntradasContext';
import PopUp from '../components/PopUp';
import BotonEspecifico from '../components/BotonEpecifico';
import '../styles/eventDetails.css';

export const EventDetails = () => {
    let contenido = "OTROS EVENTOS";
    const { eventId } = useParams();
    const { events } = useContext(EventContext);
    const { entradasCompradas, setEntradasCompradas } = useContext(EntradasContext);
    const event = events.find(e => e.id === eventId);
    const [modalAbierto, setModalAbierto] = useState(false);


    const abrirModal = () => {
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };
    const comprarEntradas = (cantidad) => {
        setEntradasCompradas(prevEntradas => prevEntradas + cantidad);
        cerrarModal();
    };

    return (
        <>
            <div className="event-details">
                <div className="event-details-text">
                    <h2 className="event-nombre">{event.nombre}</h2>
                    <p className="event-empresa">Empresa: {event.empresa}</p>
                    <p className="event-fecha_hora">Fecha - Hora: {event.fecha_hora}</p>
                    <p className="event-ubicacion">Ubicacion: {event.ubicacion}</p>
                    <p className="event-precio">Precio: {event.precio}</p>
                    <p className="event-descripcion">Descripción: {event.descripcion}</p>
                </div>
                <div className='event-imagen'>
                    <p>{event.imagen}</p>
                </div>
                <div>
                    <button className='event-button' onClick={abrirModal}>COMPRAR</button>
                    <PopUp isOpen={modalAbierto} onComprar={comprarEntradas} toggleModal={cerrarModal} evento={event} />
                </div>
                <div>
                    <Link to={`/events`}>
                        <BotonEspecifico contenido={contenido}></BotonEspecifico>
                    </Link>
                </div>
                <div>
                    <p className='entradas-text'>
                        Se han adquirido {entradasCompradas} entradas de eventos
                    </p>
                </div>
            </div>
        </>
    );
}


