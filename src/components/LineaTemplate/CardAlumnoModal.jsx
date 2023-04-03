
import DSC_0613 from '../../assets/fotos/DSC_0613.JPG'
export const CardAlumnoModal = ({name, proyecto,url}) =>{
    
    return(
        <>
        <div  className="card card-alumno-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div className="container-img-card-line" style={{width:"100%", height: "100%"}}>
                        <img loading='lazy' src={require(`../../assets/fotos/${url}`)} alt="img"  style={{width:'100%'}}/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className='card-title'>{name}</h5>
                        <p>{proyecto}</p>
                    </div>
                </div>
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