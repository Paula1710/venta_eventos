import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const tipos = ['concierto','teatro','cine','discoteca','musical','festival','exposicion','monologo','espectaculo'];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to='/events'>Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"to={`/events/tipos/${tipos[0]}`}>Conciertos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[1]}`}>Teatros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[2]}`}>Cines</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[3]}`}>Discotecas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[4]}`}>Musicales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[5]}`}>Festivales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[6]}`}>Exposiciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[7]}`}>Monólogos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/events/tipos/${tipos[8]}`}>Espectáculos</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
};

export default Navbar;