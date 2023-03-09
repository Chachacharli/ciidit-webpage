import React from "react";
import { Separator } from "../Headers/Separator";
import { ProyectoCard } from "./ProyectoCard";
import { Cita1 } from "../Citas/Cita1";
const PROYECTOS = [

    {
        date: '2016-2019',
        title: 'Desarrollo de Materiales.',
        text: 'Desarrollo de Materiales Nanoestructurados Basados en Fosfatos de Vanadio y Fosfatos deManganeso Para su Estudio Electroquímico Como Electrodos en Capacitores Electroquímicos.CONACYT. 2016-2019. '
    },
    {
        date: '2018',
        title: 'Sistema de Liberación de Metotrexato.',
        text: ' Sistema de Liberación de Metotrexato Mediante Nanotubos TiNi y Membrana Polimérica de PNIPAM. PAICYT, 2018.'
    },
    {
        date: '2018',
        title: 'Efecto Antimicrobiano de Nanopartículas.',
        text: 'Síntesis y Evaluación del Efecto Antimicrobiano de Nanopartículas de Fosfato de Vanadio “in vitro”'
    },

]


export const Proyectos = () =>{
    return(
        <section className="section">
            <Separator name='Proyectos' ></Separator>
            <Cita1 autor={'Francis Bacon escribió en 1620'} cita={'El hombre cree con más disposición lo que preferiría que fuera cierto. En consecuencia, rechaza cosas difíciles por impaciencia en la investigación; silencia cosas, porque reducen las esperanzas; lo más profundo de la naturaleza, por superstición; la luz de la experiencia, por arrogancia y orgullo; cosas no creídas comúnmente, por deferencia a la opinión del vulgo. Son pues innumerables los caminos, y a veces imperceptibles, en que los afectos colorean e infectan la comprensión.'}/>
            <br />
            <div className="container">
                <div className="row d-flex flex-column row-gap-3">
                {PROYECTOS.map((proyecto) =>{
                    return(
                        <ProyectoCard date={proyecto.date} title={proyecto.title} text={proyecto.text}></ProyectoCard>
                    )
                })}

                </div>
            </div>

        </section>
    )
}