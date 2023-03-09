import React from "react";
import { Separator } from "../Headers/Separator";
import { CardLinea } from "./CardLinea";
import '../../styles/lineasInvestigacion.css'
import { Cita1 } from "../Citas/Cita1";
import LINEAS_ACTUALES from '../../Json/LINEAS_ACTUALES.json'

export const LineasInvestigacion = () =>{
    return(
        <section id="LineasInvestigacion" className="section">
            <Separator name="Líneas de investigación"></Separator>
            <Cita1 autor={'Leonardo da Vinci'} cita={'La Ciencia es el capitán y la práctica el soldado. La persona que se enamora de la práctica sin la Ciencia es como el navegante que quiere manejar su nave sin brújula ni timón y, por consiguiente, no sabe a dónde va.'} ></Cita1>
            <br />
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