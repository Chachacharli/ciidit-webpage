import React, { useEffect } from "react";
import '../../styles/tabs.css'
import { Separator } from "../Headers/Separator";
import { Cita1 } from "../Citas/Cita1";
import { PUBLIS } from "../../Json/PUBLIS";
import SectionTesis from "./SectionTesis";

const Patentes = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <ol className="list-group list-group-numbered lista-patentes">
                    <li className="list-group-item d-flex justify-content-between align-items-start item-patente">
                        <div className="ms-2 me-auto">
                                                
                        Dispositivo de electrohilado para generar múltiples fibras que permite la variación de 
                        distancia entre cables conductores y colectores de corriente, así como el uso de 
                        diversos colectores. No. 107980. 2022.

                        </div>
                        <span className="badge bg-primary rounded-pill">2022</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start item-patente">
                        <div className="ms-2 me-auto">
                        
                        Impresora 3D de nanomateriales con múltiple sistema de inyecciones. No. 112183. 2021.   
                        </div>
                        <span className="badge bg-primary rounded-pill">2021</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start item-patente">
                        <div className="ms-2 me-auto ">
                        
                        Proceso para la Síntesis de Materiales Nanofibrosos Basados en Alcohol Polivínilico y 
                        Cómpositos de Carboximetil-Celulosa y Nanopartículas de Plata, Material y uso como 
                        Relleno de Chimenea en Implantes Dentales. No. 370365. 2019
                        </div>
                        <span className="badge bg-primary rounded-pill">2019</span>
                    </li>
                    </ol>
                </div>

            </div>
   

        </div>
    )
}


const Publi = ( {date, datos} ) =>{
    return(
        datos.map((publicacion,idx) =>{
            return(<><a className="paper-text" href={publicacion.url} target='_blank' rel='noreferrer'>{idx+1}.- {publicacion.tittle}</a><br /> <br /></>)
        })
    )
}

export const Publicaciones = ()=>{
    useEffect(()=>{
        const btn_publicaciones = document.querySelectorAll('.btn-paper')
            btn_publicaciones.forEach((btn)=>{
                btn.addEventListener('click', ()=>{
                    let variale = btn.getAttribute("target")
                    let target = document.querySelector(`#${variale}`)
                    target.scrollIntoView({block: "center", behavior: "smooth"})
                })
            })
    },[])


    return(

        <section id="Publicaciones" className="section">
            <Separator name='Publicaciones'></Separator>
            <Cita1 autor={'Joan-Baptista van Helmont, 1648'} cita={'Que todas las plantas derivan inmediata y sustancialmente del elemento acuático es lo que he aprendido del siguiente experimento. Tomé una vasija de barro en la cual coloqué 200 libras de tierra secada en un horno y regada con agua de lluvia. Planté allí el vástago de un sauce que pesaba cinco libras. Cinco años después se había convertido en un árbol que pesaba 169 libras y unas tres onzas. No se añadió nada más que lluvia (o agua destilada). Se colocó la gran vasija en tierra y fue cubierta con una tapadera de hierro recubierto de hojalata, que estaba perforada con varios orificios. No he pesado las hojas que cayeron en los cuatro otoños transcurridos. Finalmente, sequé la tierra en la vasija nuevamente y me encontré con las mismas 200 libras menos dos onzas. Por lo tanto, 164 libras de madera, corteza y raíces habían surgido exclusivamente del agua.'}></Cita1>
  
        <div className="container">
            <div className="row">
                <div className="col-md-2 d-flex flex-column">
                    {PUBLIS.map((anio)=>{
                        return(
                            <p className="btn btn-paper m-2" target={`publicacion-${anio.date}`} id={`publicacion-btn-${anio.date}`}> {anio.date}</p>
                        )
                    })}
                </div>
               
                <div className="col-md-10">                    
                <div id="container-publicaciones" className="container-publicaciones" >
                        {PUBLIS.map((anio) =>{
                            return(
                                <div key={`publicacion-${anio.date}`}>
                                    <h4 className="h3 header-paper my-2" id={`publicacion-${anio.date}`}>{anio.date}</h4>
                                    <Publi {...anio}> </Publi>
                                </div>
                            )
                        })}
                    </div> 
                    </div>
            </div>


        </div>

        <Separator name='Patentes'></Separator>

        <Patentes/>
        <Separator name='Tesis'></Separator>
        <SectionTesis/>

        </section>
    )
}