import React from "react";
import '../../styles/separator.css'

export const Separator = ( props) =>{
    return(
        <div className="separator-container container">
            <div className="row">
                <div className="col">
                    <h3 className="header-separator-text">{props.name}</h3>
                    <hr className="line-separator" />
                </div>
            </div>
        </div>
    )
}