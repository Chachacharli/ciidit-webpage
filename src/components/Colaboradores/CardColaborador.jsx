import React from "react";
import '../../styles/colaboradores.css'

export const CardColaborador = (props) =>{
    return(
        <div className="col-md-4">
        <div className="card mb-3 card-colaborator">
            <div className="row g-0 h-100">
                <div className="col-md-4 d-flex justify-content-center align-items-center p-2" >
                <img src={require(`../../assets/colaboradores/${props.url}`)} className="img-fluid rounded-start img-colaborator" alt="Colaborador"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title fs-4 fw-bolder">{props.name}</p>
                    <p className="card-text">{props.text}</p>

                </div>
                </div>
            </div>
        </div>
        </div>
    )
}