import { Footer } from '../Footer/Footer'
import { SideBarLineas } from './SideBarLineas'
import { PostMetaData } from './PostMetaData'
import { BlogParagraph } from './BLogParagraph'
import DSC_0702 from '../../assets/fotos/DSC_0702.JPG'
import '../../styles/lineaInvestigaciontemplate.css'
import { AlumnosRelacionados } from './AlumnosRelacionados'


export const LineaTemplate = ( params, {data}) =>{
    window.scrollTo(0,0);
    

    return(
        <>
        {data ? console.log(data): console.log('NO se ha encontrado nada')}
        <section className="section-linea-investigacion">
        <br />


        <main className='main-article-container'>

        
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


