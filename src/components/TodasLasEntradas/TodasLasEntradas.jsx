import React from "react";
import { Link } from "react-router-dom";
import '../../styles/blogEntrys.css'

const Filtros = [ "Python 🐍", "Supercapacitores 🥽"]

const Entradas = [
    {
        tittle: "Entrada 1",
        date: "07/03/23",
        description: " lo",
        tags: ["Supercapacitores 🥽", "Python 🐍"],
        
    },
    {
        tittle: "Entrada 2",
        date: "05/03/23",
        description: " lo",
        tags: ["Supercapacitores 🥽", "Python 🐍"],
        
    },
    {
        tittle: "Entrada 3",
        date: "07/03/23",
        description: " lo",
        tags: ["Supercapacitores 🥽", "Python 🐍"],
        
    },  
    {
        tittle: "Entrada 4",
        date: "05/03/23",
        description: " lo",
        tags: ["Supercapacitores 🥽", "Python 🐍"],
        
    },
    {
        tittle: "Entrada 5",
        date: "07/03/23",
        description: " lo",
        tags: ["Supercapacitores 🥽", "Python 🐍"],
        
    },
    {
        tittle: "Entrada 6",
        date: "05/03/23",
        description: " lo",
        tags: ["Supercapacitores 🥽", "Python 🐍"],
        
    },
]

export const TodasLasEntradas = () =>{
    return(
        <section className="section-2">
            <div className="container">
                <Link to='/'> <small> {"< "}Volver</small> </Link>
                <br /><br />
                <div className="row">
                    <div className="col-md-8">
                    {Entradas.map((elem,idx) =>{
                        return(
                            
                            <div className="card w-75 mb-3 entry-log">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5 className="card-title fw-bolder color ">{elem.tittle}</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <p className="text-body-secondary">{elem.date}</p>
                                        </div>
                                        <div className="col-md-4">
                                        <ul> {elem.tags.map((tag) =>{return <li className="tag-entry text-body-secondary" key={elem.tittle}> {tag} </li> })}</ul>

                                        </div>
        
                                    </div>

                                </div>
                            </div>

                        )
                    })}
        
                    </div>
                    <div className="col-md-4 "  >
                        <div className="sticky-top my-0" style={{top: "1rem"}}>
                        <h4>Filtros</h4>
                        <div className="card " >
                            <div class="form-check filtros">
                                {Filtros.map((filtro)=>{
                                    return(
                                        <label>
                                            <input type="checkbox" />
                                            <span>{filtro}</span>
                                        </label>
                                    )
                                })}
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

