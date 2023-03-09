import React from "react";

import  '../../styles/citas.css'

export const Cita1 = ({autor, cita}) =>{
    return(
        <section className="section-auto">
            <div className="container text-center container-cita1">
                <p className="texto-cita">“{cita}”   </p>
                <small className="cita-autor">{autor}</small>

            </div>
        </section>
    )
}

