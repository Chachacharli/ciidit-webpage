import React from "react";
import { Separator } from "../Headers/Separator";
import { CardEntryPost } from "./CardEntry";
import { Link } from "react-router-dom";
import '../../styles/blog.css'
import postlist from "../../posts.json"


export const Blog = () =>{
    return(
        <section id="Blog" className="section">
            <Separator name='Blog'></Separator>
            <div className="container">
                <div className="row">
                    {
                        postlist.map((post,i) => {
                            if(i<=10){
                                return( 
                                    <CardEntryPost id={post.id} title={post.title} date={post.date} author={post.author}> </CardEntryPost>
                                )
                            }
                            return null;

                        })
                    }
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md3 d-flex justify-content-center">
                    {/*<Link to={"/Entradas"} type="button" class="btn btn-info ">Ir a todos los post</Link>*/}

                    </div>
                </div>
            </div>
        </section>
    )
}