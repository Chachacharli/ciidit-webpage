import Regate from '../../assets/240px-ResearchGate.png'
import ORCID from '../../assets/512px-ORCID.png'
import GoogleAca from '../../assets/GoogleAca.png'
import UANL_LOGO from   '../../assets/UANL.png'


export const ContactoLinks = () =>{
    return(
        <div className="row d-flex aling-items-center justify-content-center">
     
        <a rel="noreferrer" target='_blank' className="col contacto-especial" href="https://www.researchgate.net/profile/Raul-Lucio-Porto">
            <img  src={Regate} alt="" />
        </a>
        <a rel="noreferrer" target='_blank' className="col contacto-especial" href="https://orcid.org/0000-0002-6894-9066">
            <img  src={ORCID} alt="" />
        </a>
        <a rel="noreferrer" target='_blank' className="col contacto-especial" href="https://scholar.google.com/citations?user=anEJefMAAAAJ&hl=es">
            <img  src={GoogleAca} alt="" />
        </a>
        <a rel="noreferrer" target='_blank' className="col contacto-especial" href="https://www.uanl.mx/investigadores/raul-lucio-porto/">
            <img  src={UANL_LOGO} alt="" />
        </a>
    </div>
    )
}