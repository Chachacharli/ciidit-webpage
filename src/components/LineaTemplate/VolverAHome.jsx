import { Link } from 'react-router-dom'

const VolverAHome = () =>{
    return(
            <Link className='z-3 text-decoration-none text-light position-fixed bottom-0 end-0 my-2 mx-5 color-1 px-2 rounded' to='/'><i className="bi bi-house mx-1 fs-4"></i></Link>
    )
}

export default VolverAHome