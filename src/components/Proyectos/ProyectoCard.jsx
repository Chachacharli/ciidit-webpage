import React from "react";


export const ProyectoCard = ( { date, title, text }) =>{
    return(
            <div className="col">
                <div className="card">
                    <div className="card-header color-1 text-light">
                        {date}
                    </div>
                    <div className="card-body">
                        <p className="card-title fs-5 fw-bold">{title}</p>
                        <p className="card-text"> {text} </p>
                    </div>
                </div>
            </div>
    )
}