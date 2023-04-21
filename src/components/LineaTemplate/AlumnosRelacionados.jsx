import { CardAlumnoModal } from "./CardAlumnoModal"

import ALUMNOS from '../../Json/ALUMNOS.json'


export const AlumnosRelacionados = ({params}) => {

    return(
        <article className='container'>
        <h2>Alumnos involucrados</h2>
        <hr />
            <div className="row gap-5">
                

                    {ALUMNOS.map((alumno) => {
                        if(alumno.linea_investigacion === params.linea){
                            return(
                                <div key={alumno.name} className="col-md-5">
                                    <CardAlumnoModal name={alumno.name} proyecto={alumno.proyecto} url={alumno.foto}></CardAlumnoModal>
                                </div>
    
                            )
                        }
                        return(<></>)
                        
                    })}
                

                    
            </div>
    </article>
    )
}