import React from "react";


export const CardAlumno = (props) =>{
    return(              
        <div className="card d-flex align-items-center justify-content-center card-alumno" style={{width: '18rem'}}>
        <div className="img-card-container d-flex align-items-center justify-content-center">
            <div className="img-content">
                <img loading="lazy" className="foto-alumno card-img-top h-225" src={require('../../assets/fotos/' + props.foto)} alt="Alumno" />
            </div>
            <div className="blob"></div>
        </div>
        <div className="card-body bg-blue d-flex align-items-center justify-content-cente flex-column">
            <h5 className="card-title name-alumno text-center">{props.name} </h5>
            <p className="card-text linea-alumno">{props.uni}</p>
            <a href="#Indice" className="icono-linea-inv"><img src={require('../../assets/icons-lineas/' + props.icono)} alt="Linea-icono" /></a>
            <small className="card-text text-center linea-inv-text">{props.linea}</small>
        </div>
    </div>
    ) 
}

