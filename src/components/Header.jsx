import React from "react";
import Logo from "../assets/logo.png";
import "../styles/header.css";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header_text">
                <img src={Logo} alt="Logo" className="logo" height={75} />
                Master Events</h1>
        </header>
    );
}