import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Separator } from "../Headers/Separator";

import ImgG from '../../assets/fotos/DSC_0702.JPG'
import ImgG2 from '../../assets/fotos/DSC_0690.JPG'

import '../../styles/fotosGrupales.css'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const FotosGrupales = () =>{
    return(
        <section id="FotosGrupales" className="section">
            <Separator name='Fotos Grupales'></Separator>
                <div className="container container-fotosG">
                <Carousel
                 responsive={responsive}
                 showDots={true}
                 containerClass="carousel-container2"
                 partialVisible={false}
                >
                    <div className="container-imagen-grupal">
                    <img src={ImgG} className="img-fluid" alt="..."/>
                    </div>
                    <div className="container-imagen-grupal">
                    <img src={ImgG2} className="img-fluid" alt="..."/>
                    </div>
                    <div className="container-imagen-grupal">
                    <img src={ImgG} className="img-fluid" alt="..."/>
                    </div>
                    <div className="container-imagen-grupal">
                    <img src={ImgG2} className="img-fluid" alt="..."/>
                    </div>
                </Carousel>
                </div>
        </section>

    )
}