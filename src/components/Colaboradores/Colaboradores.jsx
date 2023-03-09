import React from "react"
import { Separator } from "../Headers/Separator"
import { CardColaborador } from "./CardColaborador"



export const Colaboradores = () =>{
    return(

        <section className="section">
            <div className="container">
             <Separator name = "Colaboradores"></Separator>

            <div className="row row-gap-3">
            <CardColaborador name='Nantes University' url='nantes.png' text='Universidad de Nantes.'/>
            <CardColaborador name='CICY' url='CICY.png'  text='Centro de Investigación Científica de Yucatán.'/>
            <CardColaborador name='CNYN' url='CNYN.jpg' text='Centro de Nanociencias y Nanotecnología.'/>
            <CardColaborador name='BUAP' url='BUAP.png' text='Benemérita Universidad Autónoma de Puebla.'/>
            <CardColaborador name='FCQ' url='FCQ.png' text='Facultad de Ciencias Químicas UANL.'/>
            <CardColaborador name='UAM' url='UAM.png' text='Universidad Autónoma Metropolitana.'/>


            </div>

            </div>
        </section>
    )
}