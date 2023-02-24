import { Link } from "react-router-dom"

import LINEAS_ACTUALES from '../../Json/LINEAS_ACTUALES.json'

export const SideBarLineas =()=>{
    return(
        <div className="col-md-4">
            <div className="position-sticky" style={{top: '2rem'}}>
            <div className="p-4 bg-secondary rounded    ">
                <h3 className="fst-italic text-light">Otras lineas</h3>
                <ol className="list-unstyled mb-0">
                    {LINEAS_ACTUALES.map((elem)=>{
                        return(
                            <li key={elem.name} className='linea-side'><Link to={`/Linea/${elem.name}`}>{elem.name}</Link></li>
                        )
                    })}
                </ol>
                </div>
        </div>
    </div>
    )
}