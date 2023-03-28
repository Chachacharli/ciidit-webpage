import React from "react";

import '../../styles/index.css'
import '../../styles/section.css'
import { Separator } from "../Headers/Separator";
import { DotIndex } from "./DotIndex";


const direcciones = [
    {
        name:'Homsdfae',
        icon: ' bi-person-circle ',
        dir: '#Home',
        color: 'color-1'
    },
    {
        name:'Estudiates',
        icon: ' bi-people-fill ',
        dir: '#Estudiantes',
        color: 'color-2'
    },
    {
        name:'Publicaciones y patentes',
        icon: ' bi-bookmark-check ',
        dir: '#ReportesDeInvestigacion',
        color: 'color-31'
    },
    {
        name:'Líneas de investigación',
        icon: ' bi-journals ',
        dir: '#LineasInvestigacion',
        color: 'color-4'
    },
    {
        name:'Blog',
        icon: ' bi-globe-americas ',
        dir: '#Blog',
        color: 'color-5'
    },
    {
        name:'Próximos eventos',
        icon: ' bi-calendar-event ',
        dir: '#Proximoseventos',
        color: 'color-6'
    },
    {
        name:'Contacto',
        icon: ' bi-envelope-at ',
        dir: '#Contacto',
        color: 'color-7'
    },
]


const Indice = () => {
    return(
        <section id="Indice" className="section"> 
        <Separator name='Indice'></Separator>
            <div className="container ">

                    <div className="container-index">
                        
                        <div className="row">

                        {
                        direcciones.map( 
                            ( elem) =>{                                
                            return(
                            <DotIndex key={elem.color } color={elem.color} dir={elem.dir} icon={ elem.icon} name={ elem.name }  ></DotIndex>
                            )
                        } )
                        }                        
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default Indice;