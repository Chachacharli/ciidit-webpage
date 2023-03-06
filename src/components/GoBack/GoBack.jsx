import React from "react";

import '../../styles/goback.css'

export const GoBack = (props) =>{
    return(
        <a href={props.href} id="Goback"> 
            <i class="bi bi-house"></i>
        </a>
    )
}

