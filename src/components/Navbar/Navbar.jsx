import React from "react";
import { DotIndex } from "../Index/DotIndex";

import '../../styles/index.css'

const direcciones = [
    {
        name:'Home',
        icon: ' bi-person-circle ',
        dir: '#Home',
        color: 'color-1'
    },
    {
        name:'Grupo',
        icon: ' bi-book ',
        dir: '#Estudiantes',
        color: 'color-2'
    },
    {
        name:'Publicaciones',
        icon: ' bi-bookmark-check ',
        dir: '#Publicaciones',
        color: 'color-31'
    },
    {
        name:'Investigación ',
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
        name:'Eventos',
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

export const  Navbar  = () =>{
    return(
        
        <>
        
        <div className="container-fluid" >
            <br />
            <div className="row d-flex  align-items-center justify-content-center ">
                <div id="container-index-media" className="row container-index d-flex column-gap-5 align-items-center justify-content-center"> 
                {
                        direcciones.map( 
                            ( elem ) =>{                                
                            return(
                            <DotIndex key={elem.color} color={elem.color} dir={elem.dir} icon={ elem.icon} name={ elem.name }  ></DotIndex>
                            )
                        } )
                        } 
                        </div>


            </div>
        </div>
        </>
    )
}