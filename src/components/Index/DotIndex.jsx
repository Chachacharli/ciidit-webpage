import React from "react";


export const DotIndex = (props) =>{
    return(
        <div className="col-md-1">
        <div className="button-index">
            <a href={`${props.dir }`} className= {`container-icon  ${props.color}`}>
                <i className={`bi ${props.icon} icon-indice`}></i>
            </a>
            <p className="tittle-dot text-center">{props.name}</p>
        </div>
    </div>
    )
}