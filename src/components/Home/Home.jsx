import React from "react";

import { Separator } from "../Headers/Separator";
import { Highlights } from "./Highlights";
import FotoCV from  '../../assets/fotos/DSC_0607.JPG'
import CV from '../../assets/RaúlLucioPorto-CVU-2023-website.pdf'

import '../../styles/home.css'

export const Home = () =>{
    return(
        <section id="Home" className="section">
            <Separator name='Home'></Separator>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-items-center justify-content-center flex-column ">
                        <div className="picture-home d-flex align-items-center justify-content-center flex-column">
                                <img className="foto-cv" src={FotoCV} alt="Raul Lucio Porto" />
                        </div>
                        <a href={CV} target='_blank' rel="noreferrer" className="btn btn-dark cv-btn">Curriculum</a>

                    </div>
                    <div className="col-md-8  ">
                        <div className="row">                        
                                <div className="col-md-12 ">
                                    <div className="semblaza">
                                        <h4>Raul Lucio Porto </h4>
                                        <p className="text-justify">Raúl Lucio Porto obtuvo su doctorado en Ciencias con Orientación en Química 
                                            de los Materiales en el 2010 en la Facultad de Ciencias Químicas de la Universidad 
                                            Autónoma de Nuevo León. Realizó un Postdoctorado en la Universidad de Nantes durante 
                                            el 2011 y 2012 en el “Institut des Matériaux Jean Rouxel (IMN)”, en el tema de capacitores 
                                            electroquímicos. Actualmente, es profesor investigador de tiempo completo en la Universidad 
                                            Autónoma de Nuevo León, en la Facultad de Ingeniería Mecánica y Eléctrica. Forma parte del consejo 
                                            técnico académico de la RED CONACYT en Almacenamiento de Energía y es jefe de los Laboratorios de 
                                            Ingeniería Biomédica de la FIME. Sus líneas principales de investigación son: síntesis y caracterización 
                                            de nanomateriales para sistemas de almacenamiento y conversión de energía, biosensores electroquímicos y 
                                            nanomateriales para aplicaciones biomédicas. </p>
                                    </div>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-md-12 ">
                                <Highlights icon='bi-search'  color='color-blue' text='Sistema Nacional de Investigadores (SNI) II'></Highlights>
                                <Highlights icon='bi-battery-charging' color='color-ligth-blue' text='Miembro del Consejo Técnico Académico de la RED CONACyT de Almacenamiento de Energía'></Highlights>
                                <Highlights icon='bi-clipboard2-pulse' color='color-green'   text='Jefe del Departamento de los Laboratorios de Ingeniería Biomédica (FIME UANL)'></Highlights>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}