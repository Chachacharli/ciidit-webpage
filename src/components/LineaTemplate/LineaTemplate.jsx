import { Footer } from '../Footer/Footer'
import { SideBarLineas } from './SideBarLineas'
import { PostMetaData } from './PostMetaData'
import { BlogParagraph } from './BLogParagraph'
import DSC_0702 from '../../assets/fotos/DSC_0702.JPG'
import '../../styles/lineaInvestigaciontemplate.css'
import { AlumnosRelacionados } from './AlumnosRelacionados'
import { Link } from 'react-router-dom'

const VolverAHome = () =>{
    return(
            <Link className='text-decoration-none text-light position-fixed bottom-0 end-0 my-2 mx-5 color-1 px-2 rounded' to='/'><i className="bi bi-house mx-1 fs-4"></i></Link>
    )
}

export const LineaTemplate = ( params, {data}) =>{
    window.scrollTo(0,0);
    

    return(
        <>
        {data ? console.log(data): console.log('NO se ha encontrado nada')}
        <section className="section-linea-investigacion">
        <br />


        <main className='main-article-container'>
            <VolverAHome/>

        
            <article className='container'>    

                <div className="row g-5">
                    <div className="img-article-container">
                        <h1> {params.linea} </h1>
                        <img src={DSC_0702} className="img-thumbnail" alt="..."/>
                    </div>
                    
                    <div className="col-md-8">   
                        <PostMetaData hidden={true}></PostMetaData>
                        <h2>as</h2>
                        <BlogParagraph ></BlogParagraph>
                    </div>
                    
                        <SideBarLineas></SideBarLineas>

                </div>

            </article>

            <AlumnosRelacionados></AlumnosRelacionados>

        </main>


        <Footer></Footer>

        </section>
        </>
    )
}


