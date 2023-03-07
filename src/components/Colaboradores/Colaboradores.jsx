import React from "react"
import { Separator } from "../Headers/Separator"
import { CardColaborador } from "./CardColaborador"



export const Colaboradores = () =>{
    return(

        <section className="section">
            <div className="container">
             <Separator name = "Colaboradores"></Separator>

            <div className="row">
            <CardColaborador name='Nantes University' text='Algún texto descriptivo.'/>
   

            </div>

            </div>
        </section>
    )
}