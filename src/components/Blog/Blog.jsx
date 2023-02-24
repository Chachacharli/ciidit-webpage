import React from "react";
import { Separator } from "../Headers/Separator";
import { CardEntry } from "./CardEntry";

import '../../styles/blog.css'

export const Blog = () =>{
    return(
        <section id="Blog" className="section">
            <Separator name='Blog'></Separator>
            <div className="container">
                <div className="row">
                    <CardEntry> </CardEntry>
                </div>
            </div>
        </section>
    )
}