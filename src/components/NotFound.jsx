import React from 'react'
import {Link} from 'react-router-dom';
import Error from "../assets/error.png";
import BotonGeneral from './BotonGeneral';
import "../styles/notFound.css";

export const NotFound = () => {
  let nombre = "INICIO";
  return (
    <div className='notFound'>
      <img src={Error} alt="Error" className="notFound-icon" height={300} />
      <div>
        <h1 className='notFound_text'>Error 404: Página no encontrada</h1>
      </div>
      <div>
        <Link  to={`/`}>
          <BotonGeneral nombre={nombre}></BotonGeneral>
        </Link>
      </div>
    </div>
  )
}
