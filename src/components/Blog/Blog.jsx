import React from "react";
import { Separator } from "../Headers/Separator";
import { CardEntry } from "./CardEntry";
import { Link } from "react-router-dom";

import '../../styles/blog.css'

export const Blog = () =>{
    return(
        <section id="Blog" className="section">
            <Separator name='Blog'></Separator>
            <div className="container gap-4">
                <div className="row">
                    <CardEntry> </CardEntry>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md3 d-flex justify-content-center">
                    <Link to={"/Entradas"} type="button" class="btn btn-info ">Ir a todos los post</Link>

                    </div>
                </div>
            </div>
        </section>
    )
}