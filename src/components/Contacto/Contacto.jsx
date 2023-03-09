import React from "react";

import '../../styles/contacto.css'
import { Footer } from "../Footer/Footer";
import { Separator } from "../Headers/Separator";
import { ContactoLinks } from "./ContactosLinks";


export const Contacto = () =>{
    return(
        <section id="Contacto" className="section-2">
            <Separator name='Contacto'></Separator>
            <div className="container contacto-container d-flex">
                <div className="row w-100">
                    <div className="col w-100">
                        <div className="row h-100 d-flex flex-column">
                            <div className="col">
                                <h6 className="header-ubicacion">Ubícanos</h6>
                                <p className="text-ubicacion header-place">Centro de Innovación, Investigación y Desarrollo en Ingeniería y Tecnología: </p>
                                <p className="text-ubicacion">PIIT Monterrey, Km. 10, Autopista al Aeropuerto Internacional de Monterrey, Apodaca, Nuevo León, México.</p>
                            </div>
                            <div className="col">
                                <p className="text-ubicacion header-place">Centro de Inovación en ingeniería de tenología inteligente biomédica y mecatrónica:</p>
                                <p className="text-ubicacion">Pedro de Alba SN, Niños Héroes, Ciudad Universitaria, San Nicolás de los Garza, N.L.  </p>
                            </div>
                            <div className="col d-flex flex-column justify-content-start">
                                <h6 className="header-ubicacion d-flex align-items-start ">Síguenos</h6>
                                <ContactoLinks></ContactoLinks>

                            </div>

                        </div>
                    </div>
                    <div className="col w-100">
                        <h6 className="header-ubicacion">Envía un correo</h6>
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


                        <div className="row">
                            <div className="col-md-12">

                            <div className="btn btn-dark w-50">Enviar</div>

                            </div>

                        </div>
                        <div className="row d-flex justify-content-end h-50">
                            <div className="col-md-3 d-flex h-100 align-items-center">
                                <a rel="noreferrer" target='_blank' className="contacto-especial" href="https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCUWKn6rICa63UH2F6Idc4rQ%2Ffeatured&e=AT1xlc6AmIhG2m0Yy0cVuwgvxyhmsQ74FUkM_OA1T0ijTtyCnPBEhb0jEWXfzTNLmdwFAL95CDo5s_zMmnAlMQspekLmKbUd-fuVYE3uZxtUUScB">
                                    <i class="bi bi-youtube w-25 yt-icon"></i>
                                </a>     
                            </div>
                            <div className="col-md-3 d-flex align-self-end h-100 align-items-center">
                            <a rel="noreferrer" target='_blank' className="contacto-especial" href="https://instagram.com/rrsciencemx?igshid=YmMyMTA2M2Y=">
                                    <i class="bi bi-instagram w-25 fb-icon"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>

        </section>
    )
}