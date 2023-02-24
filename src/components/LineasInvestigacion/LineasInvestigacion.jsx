import React from "react";
import { Separator } from "../Headers/Separator";
import { CardLinea } from "./CardLinea";
import '../../styles/lineasInvestigacion.css'

import LINEAS_ACTUALES from '../../Json/LINEAS_ACTUALES.json'

export const LineasInvestigacion = () =>{
    return(
        <section id="LineasInvestigacion" className="section">
            <Separator name="Lineas de investigacion"></Separator>
            <div className="container">
                <div className="row gap-0 row-gap-3">

                    {LINEAS_ACTUALES.map((elem) =>{
                        return(
                            <CardLinea key={elem.name} color={elem.color} icon={elem.icon} name={elem.name}></CardLinea>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}