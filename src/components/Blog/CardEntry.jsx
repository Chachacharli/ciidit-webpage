import React from "react";

import { Link } from "react-router-dom";

export const CardEntryPost = ({id, title, date, author}) =>{
    return(
        <Link to={`/Blog/${id}`} className="text-decoration-none col-md-3 mx-2">
            
            <div className="card blog-entry-card col-md-3 text-style-none " style={{width: '18rem'}}>
                <div className="mes-blog p-2">
                    <h5 className="card-tittle text-dark">{title}</h5>
                    <p className="card-entry-fecha text-dark">{date}</p>
                    <p className="text-dark">by {author}</p>    
                </div>
            </div>
        </Link>
    )
}