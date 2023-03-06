import React from "react";


import logo4 from '../../assets/logoB1.png'

import { BgLanding } from "./BgLanding";
import { Navbar } from "../Navbar/Navbar";


import '../../styles/section.css'
import '../../styles/Landing.css'

export const Landing = ( ) =>{
    return(
        <section id="Landing" className="section ">
            <BgLanding></BgLanding>
            <div className="conent-landing">
            <Navbar></Navbar>
                <div className="container text-light flex-column h-50 text-center d-flex justify-content-center align-items-center"> 
                    <div className="row ">
                        <div className="col">
                            <img src={logo4} alt=""  style={{width: '150px'}}/>
                        </div>
                    </div>
                    <div className="row ">
                    <div className="col ">
                            <h1 className="header-landing fw-bold">Dr. Raúl Lucio Porto</h1>
                    </div>

                    </div>
                    <div className="row">
                    <div className="col">
                            <p className="fs-5">Centro de Innovación, Investigación y Desarrollo en Ingeniería y Tecnología</p>
                            <p className="fs-5">Centro de Inovación en Ingeniería de Tecnología Inteligente Biomédica y Mecatrónica</p>
                            <p className="fs-5">Facultad de Ingeniería Mecánica y Eléctrica</p>
                            <p className="fs-5">UANL</p>

                    </div>

                    </div>

                </div>
            </div>
        </section>
    )
}