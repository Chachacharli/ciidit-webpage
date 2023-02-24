import React from "react";

import '../../styles/contacto.css'
import { Footer } from "../Footer/Footer";
import { Separator } from "../Headers/Separator";

import Regate from '../../assets/240px-ResearchGate.png'
import ORCID from '../../assets/512px-ORCID.png'
import GoogleAca from '../../assets/GoogleAca.png'

export const Contacto = () =>{
    return(
        <section id="Contacto" className="section-2">
            <Separator name='Contacto'></Separator>
            <div className="container contacto-container d-flex">
                <div className="row w-100">
                    <div className="col w-100">
                        <div className="row h-100 d-flex flex-column">
                            <div className="col">
                                <h6 className="header-ubicacion">Ubicanos</h6>
                                <p className="text-ubicacion header-place">CIIDIT: </p>
                                <p className="text-ubicacion">PIIT Monterrey, Km. 10, Autopista al Aeropuerto Internacional de Monterrey, Apodaca, Nuevo León, México.</p>
                            </div>
                            <div className="col">
                                <p className="text-ubicacion header-place">Centro de Inovación en ingeniería de tenología inteligente biomédica y mecatrónica:</p>
                                <p className="text-ubicacion">Pedro de Alba SN, Niños Héroes, Ciudad Universitaria, San Nicolás de los Garza, N.L.  </p>
                            </div>
                            <div className="col">
                                <h6 className="header-ubicacion">Siguenos</h6>
                                <div className="social-media d-flex w-100">
                                    <i class="bi bi-youtube w-25 yt-icon"></i>
                                    <i class="bi bi-facebook w-25 fb-icon"></i>
                                </div>
                                <div className="col ">
                                    <a rel="noreferrer" target='_blank' className="contacto-especial" href="https://www.researchgate.net/profile/Raul-Lucio-Porto">
                                        <img  src={Regate} alt="" />
                                    </a>
                                    <a rel="noreferrer" target='_blank' className="contacto-especial" href="https://orcid.org/0000-0002-6894-9066">
                                        <img  src={ORCID} alt="" />
                                    </a>
                                    <a rel="noreferrer" target='_blank' className="contacto-especial" href="https://scholar.google.com/citations?user=anEJefMAAAAJ&hl=es">
                                        <img  src={GoogleAca} alt="" />
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col w-100">
                        <h6 className="header-ubicacion">Envia un correo</h6>
                        <div className="form-floating mb-3">
                                <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput2" placeholder="Password"/>
                                <label htmlFor="floatingInput">Subject</label>
                        </div>
                        <br />
                        <div className="form-floating ">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                        <br />
                        <div className="btn btn-dark w-50">Enviar</div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </section>
    )
}