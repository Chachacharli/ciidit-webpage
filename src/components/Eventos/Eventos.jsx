import React from "react";
import { Separator } from "../Headers/Separator";
import { CardEvento } from "./CardEvento";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../../styles/eventos.css'



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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

export const Eventos = () =>{
    return(
        <section id="Proximoseventos" className="section">
            <Separator name='Eventos'></Separator>
            <div className="container eventos-container">
                <Carousel
                    responsive={responsive}
                    showDots={true}
                    containerClass="carousel-container-eventos"
                    partialVisible={false}
                    >

                    <CardEvento tittle={'Seminario de nanotecnología'} description={'Cada miércoles en sala de viodeconferencias CIIDIT'}  day={'M'} mes={'Marzo'} hour={'11:00'} ></CardEvento>
                    <CardEvento tittle={'Curso de Python '} description={'Cada miércoles en sala de viodeconferencias CIIDIT'}  day={'M'} mes={'Marzo'} hour={'12:00'}></CardEvento>                        
                
                </Carousel>
            </div>

        </section>
    )
}