import React from "react";

export const CardEvento = () =>{
    return(
        <div className="card-container-evento" >
        <div className="card card-evento">
            <div className="dia-evento">
                <p>7</p>
            </div>
            <div className="mes-evento">
                <p>Febrero</p>
            </div>
        </div>
        <div className="description-evento">
            <h6 className="name-evento"> Evento 1 </h6>
            <p className="info-evento"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at, nobis. </p>
            <p className="hora-evento">8:00</p>
        </div>
    </div>
    )
}