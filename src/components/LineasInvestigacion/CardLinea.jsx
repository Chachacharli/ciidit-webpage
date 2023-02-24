import React from "react";

import { Link } from "react-router-dom";

export const CardLinea = (props) =>{
    return(
            <div className="p-2 col-md-4">
            <Link to={`/Linea/${props.name}`} style={{textDecoration: 'none'}}>
            <div className={`card-linea-container ${props.color }`}>
                <a className="icon-card-linea" href="#Alumnos"> <img  src={require( '../../assets/icons-lineas/' + props.icon  )} alt="Linea de investigacion" /></a>
                <p className="name-of-line text-center">{props.name}</p>
                </div>
                </Link>

            </div>
    )   
}