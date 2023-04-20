
export const CardAlumnoModal = ({name, proyecto,url}) =>{
    
    return(
        <>
        <div  className="card card-alumno-modal"  data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className="row h-100">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className="img-container-modal m-2">
                        <img className="img-card-modal" loading='lazy' src={require(`../../assets/fotos/${url}`)} alt="img"  /> 
                    </div>
                </div>
                <div className="col-md-8">
                    <h4 className="p-2">{name}</h4>
                    <p className="p-2">{proyecto}</p>
                </div>
            </div>

        </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Relacionado en: </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    [ INVESTIGACIONES Y TESIS  ] <small> <a href="#a"> Link</a> </small>
                </div>

                </div>
            </div>
        </div>
        </>
    )
}