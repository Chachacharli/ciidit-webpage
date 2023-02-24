import React from "react";
import Particles from "react-tsparticles";
import { CONFIG } from "../../Json/particles_config";

import '../../styles/backgroud.css'

export const BackGrouPage = () =>{
    
    return(
        <Particles
            params={CONFIG}   
        >

        </Particles>
    )
}