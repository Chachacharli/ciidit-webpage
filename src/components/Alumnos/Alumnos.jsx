import React from "react";

import { Separator } from "../Headers/Separator";
import Carousel from 'react-multi-carousel';
import { CardAlumno } from "./CardAlumno";
import ALUMNOS from '../../Json/ALUMNOS.json'

import 'react-multi-carousel/lib/styles.css';
import '../../styles/alumnos.css'



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };




export const Alumnos = ( ) =>{
  
    return(
        <section id="Estudiantes" className="section">
            <Separator name ='Estudiantes'/>

            <div className="container">
                <Carousel 
                responsive={responsive}
                showDots={true}
                containerClass="carousel-container"
                > 
                    { 
                      ALUMNOS.map( (elem) =>{
                      return(
                          <CardAlumno key={elem}  name ={elem.name} icono={elem.icon_inv} foto={elem.foto} uni={elem.carrera} linea={elem.linea_investigacion}></CardAlumno>
                        )
                      })}

                    </Carousel>
            </div>


        </section>
    )
}