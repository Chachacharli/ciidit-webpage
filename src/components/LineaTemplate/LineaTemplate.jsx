import { Link } from 'react-router-dom'

import { Footer } from '../Footer/Footer'
import { SideBarLineas } from './SideBarLineas'
import { PostMetaData } from './PostMetaData'
import { BlogParagraph } from './BLogParagraph'

import { useState, useEffect } from 'react'


import DSC_0702 from '../../assets/fotos/DSC_0702.JPG'

import '../../styles/lineaInvestigaciontemplate.css'
import { AlumnosRelacionados } from './AlumnosRelacionados'

export const LineaTemplate = ( params) =>{

    const [data,setData]=useState([]);
     const getData =()=>{
        fetch('http://localhost:3000', 
            {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })

        .then(function(response){
            console.log(response)
            return response.json();     
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])

    return(
        <>
        {console.log(data)}
        <section className="section-linea-investigacion">

        <header className='blog-header lh-1 py-3 bg-body-secondary'>
            <div className='row flex-nowrap justify-content-center align-items-center'>
                <div className="col-12">
                    <Link style={{textDecoration: 'none', color: 'black'}} to={'/'}><h2 className='name-page'> Nombre de la pagina </h2></Link>
                </div>
            </div>
        </header >
        <br />  


        <main className='main-article-container'>

        
            <article className='container'>    

                <div className="row g-5">
                    <div className="img-article-container">
                        <h1> {params.linea}</h1>
                        <img src={DSC_0702} className="img-thumbnail" alt="..."/>
                    </div>
                    
                    <div className="col-md-8">   
                        <PostMetaData></PostMetaData>
                        <h2>{data.name}</h2>
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


