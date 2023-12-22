import React from "react";
import { Link } from "react-router-dom";
import BotonGeneral from './BotonGeneral';
import Portada from "../assets/events.jpg";
import Logo from "../assets/logo.png";
import "../styles/inicio.css";

export const Inicio = () => {
    let nombre = "COMENZAR";
    return (
        <div className="inicio">
            <h1 className="inicio_text">
                <img src={Logo} alt="Logo" className="logo" height={120} />
                Master Events</h1>
            <div className="icon-container">
                <img src={Portada} alt={"icon"} />
                <Link to={`/events`}>
                    <BotonGeneral nombre={nombre}></BotonGeneral>
                </Link>
            </div>
        </div>
    );
}
