import React from "react";

import DSC_0690 from '../../assets/fotos/DSC_0690.JPG'

export const CardEntry = () =>{
    return(
        <div className="card blog-entry-card" style={{width: '18rem'}}>
        <img src={DSC_0690} className="card-img-top" alt="..."/>
        <div className="mes-blog">
            <h5 className="card-tittle">Entry 1</h5>
            <p className="card-entry-fecha">20 octubre 2022</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>    
        </div>
    </div>
    )
}