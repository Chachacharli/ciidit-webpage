import React from "react";

export const CardEvento = ({tittle, description, day, mes, hour}) =>{
    return(
        <div className="card-container-evento" >
        <div className="card card-evento">
            <div className="dia-evento">
                <p>{day}</p>
            </div>
            <div className="mes-evento">
                <p>{mes}</p>
            </div>
        </div>
        <div className="description-evento">
            <h6 className="name-evento"> {tittle} </h6>
            <p className="info-evento"> {description} </p>
            <p className="hora-evento"> {hour} </p>
        </div>
    </div>
    )
}