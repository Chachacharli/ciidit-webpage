export const Modal = () =>{
    return(
        <>
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