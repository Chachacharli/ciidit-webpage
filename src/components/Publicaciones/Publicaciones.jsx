import React from "react";

import { TabListBoostrap } from "./TabListBoostrap";
import { TabPaneBoostrap } from "./TabPaneBoostrap";

import '../../styles/tabs.css'
import { Separator } from "../Headers/Separator";


const Patentes = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                <ol className="list-group list-group-numbered lista-patentes">
                    <li className="list-group-item d-flex justify-content-between align-items-start item-patente">
                        <div className="ms-2 me-auto">
                        
                        Proceso para la Síntesis de Materiales Nanofibrosos Basados en Alcohol Polivínilico y 
                        Cómpositos de Carboximetil-Celulosa y Nanopartículas de Plata, Material y uso como 
                        Relleno de Chimenea en Implantes Dentales. No. 370365. 2019
                        </div>
                        <span className="badge bg-primary rounded-pill">2019</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start item-patente">
                        <div className="ms-2 me-auto">
                        
                        Impresora 3D de nanomateriales con múltiple sistema de inyecciones. No. 112183. 2021.   
                        </div>
                        <span className="badge bg-primary rounded-pill">2021</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start item-patente">
                        <div className="ms-2 me-auto ">
                        
                        Dispositivo de electrohilado para generar múltiples fibras que permite la variación de 
                        distancia entre cables conductores y colectores de corriente, así como el uso de 
                        diversos colectores. No. 107980. 2022.
                        </div>
                        <span className="badge bg-primary rounded-pill">2022</span>
                    </li>
                    </ol>
                </div>
                <div className="col-md-1"></div>

            </div>
   

        </div>
    )
}

export const Publicaciones = ()=>{

    return(

        <section id="Publicaciones" className="section">
            <Separator name='Publicaciones'></Separator>
            <div className="container ">
            <div className="d-flex align-items-start">
                <TabListBoostrap></TabListBoostrap>
                <TabPaneBoostrap></TabPaneBoostrap>
                </div>
            </div>

        <Separator name='Patentes'></Separator>

        <Patentes></Patentes>
        </section>
    )
}