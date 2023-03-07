import React from "react";
import '../../styles/colaboradores.css'

export const CardColaborador = (props) =>{
    return(
        <div className="col-md-4">
        <div className="card mb-3 card-colaborator">
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center" >
                <img src={require('../../assets/colaboradores/nantes.png')} className="img-fluid rounded-start" alt="Colaborador"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.text}</p>
                    <button type="button" class="btn btn-info">Ir a colaborador</button>

                </div>
                </div>
            </div>
        </div>
        </div>
    )
}