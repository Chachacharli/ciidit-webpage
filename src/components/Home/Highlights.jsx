import React from "react";


export const Highlights = (props) =>{

    
    return(
        <div className="row">
            <div className="col-lg-2 d-flex al ign-items-center justify-content-center">
                <div className={`higth-ligth-icon ${props.color}` } >
                    <i class={`bi ${props.icon}`}></i>
                </div>
            </div>
        <div className="col-lg-10 d-flex align-items-center"> <p className="higth-ligth-text d-flex align-items-center"> {props.text}</p></div>
    </div>
    )
}   