import { CardAlumnoModal } from "./CardAlumnoModal"

export const AlumnosRelacionados = () => {
    return(
        <article className='container'>
        <h2>Alumnos involucrados</h2>
        <hr />
            <div className="row">
                
                <div className="col-5">


                    <CardAlumnoModal></CardAlumnoModal>
                

                    
                </div>
            </div>
    </article>
    )
}