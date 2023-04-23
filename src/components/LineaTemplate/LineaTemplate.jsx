import { Footer } from '../Footer/Footer'
import { SideBarLineas } from './SideBarLineas'
import { PostMetaData } from './PostMetaData'
import { BlogParagraph } from './BLogParagraph'
import { AlumnosRelacionados } from './AlumnosRelacionados'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import '../../styles/lineaInvestigaciontemplate.css'

import SUPERCAPACITOR from '../../assets/Supercapacitor_electroquimcio_1.png'
import BIOELECTRONICA from '../../assets/Bioelectronica.png'
import TILACOIDE from '../../assets/Membrana_de _tilacoides.png'
import BIOSENSORES from '../../assets/Biosensores_electroquimicos.png'
import ACTUADORES from '../../assets/Actuadores_electroquimicos.png'
import BIOSENSORES2 from '../../assets/Biosensores_electroquimicos_cardio.png'

const DicLinea = {

    'Almacenamiento de Energía': 0,
    'Nanomateriales con Propiedades Farmacológicas': 1,
    'Conversión de Energía': 2,
    'Biosensores Electroquimicos': 3, 
    'Actuadores Electroquímicos': 4,
    'Bioelectrónica': 5

}

const LineasText = [
    {
        name: 'Almacenamiento de Energía',
        img: SUPERCAPACITOR,
        parrafos: [
            {
                parrafo: 1,
                text: 'Con la llegada de los vehículos eléctricos, drones, dispositivos electrónicos portátiles, bioelectrónica y el Internet de las Cosas, se ha incrementado la demanda de soluciones de almacenamiento de energía que permitan la portabilidad y autonomía requerida. Las baterías y supercapacitores son las principales alternativas de almacenamiento de energía electroquímica en la actualidad. '
            },
            {
                parrafo: 2,
                text: 'Las baterías tienen una gran capacidad para almacenar energía son nuestra principal fuente de energía almacenada para generar autonomía y portabilidad. Sin embargo, tienen un ciclo de vida corto y requieren de periodos prolongados para cargarse. Los supercapacitores (capacitores electroquímicos) comienzan a ser utilizados como fuente almacenamiento de energía en algunas aplicaciones, ya que tienen la capacidad de liberar la energía de forma más rápida que las baterías, una mayor rapidez de carga y un ciclo de vida significativamente mayor.'
            },
            {
                parrafo: 3,
                text: 'El área de oportunidad para los supercapacitores es incrementar la energía almacenada, manteniendo su alta velocidad de carga y descarga. En cambio, para las baterías es incrementar su velocidad de carga y su ciclo de vida. Ambos dispositivos tienen el mismo objetivo en común, incrementar la energía almacenada, alta velocidad de carga y un ciclo de vida prolongado.'
            },
            {
                parrafo: 4,
                text: 'En nuestro grupo de investigación estamos trabajando en el desarrollo de materiales para el almacenamiento de energía electroquímica. Diseñamos materiales nanoestructurados con el propósito de incrementar la energía almacenada y la velocidad de carga utilizando las siguientes estrategias. A) Por medio de procesos faradaicos rápidos utilizando diversos metales de transición y moléculas orgánicas con propiedades redox. B) Con nanoarquitecturas que permitan fácil acceso a los iones del electrolito como estructuras mesoporosas. C) Con materiales que tienen estructuras cristalinas con túneles en 1D, 2D y 3D con diversos grupos funcionales.'

            },
            {
                parrafo: 5,
                text: 'Nuestros objetivos son:'
                
            },
            {
                parrafo: 5,
                text: '-Desarrollar micro-supercapacitores que pueden ser utilizados en dispositivos portátiles.'
            },
            {
                parrafo: 5,
                text: '-Bio-supercapacitores para utilizarlos en dispositivos médicos implantables, como marcapasos y para terapias de estimulación cerebral, alimentar biosensores de pH, glucosa, presión arterial, etc.'
            },
            {
                parrafo: 6,
                text: '-Supercapacitores flexibles para textiles inteligentes, drones y robótica suave.'
            },
            {
                parrafo: 7,
                text: '-Supercapacitores para vehículos eléctricos, recuperación de energía en sistemas de frenado y almacenamiento a gran escala para la red eléctrica.'
            }
        ]
    },
    {
        name: 'Nanomateriales con Propiedades Farmacológicas',
        img: BIOELECTRONICA,
        parrafos:[
            {
                parrafo: 1,
                text: 'Los fármacos tradicionales nos ayudan a combatir enfermedades infecciosas, cáncer y otros tipos de padecimientos. Sin embargo, la rápida aparición de nuevos microorganismos fármaco resistentes, los severos efectos secundarios y la ineficacia de los fármacos frente a padecimientos complejos, son la causa de una intensa búsqueda de nuevas alternativas.'
            },
            {
                parrafo: 2,
                text: 'Las nanopartículas, materiales con un rango entre 1 y 100 nm, se están desarrollando para combatir las enfermedades antes mencionadas. Nanopartículas metálicas (Au, Ag, Pt), cerámicas (VOHPO4, TiO2, ZnO) y orgánicas (nanocápsulas poliméricas) son algunos ejemplos reportados en la literatura. De igual forma, las nanopartículas se pueden funcionalizar con fármacos tradicionales para su posterior liberación controlada o como un medio de transporte hasta el sitio de requerido (Fe3O4). Se pueden modificar superficialmente con moléculas para anclar a las nanopartículas en las membranas de células tumorales (MnPO4). Lo anterior con el fin de potenciar su efecto terapéutico.'
            },
            {
                parrafo: 3,
                text: 'En nuestro grupo de investigación nos enfocamos en desarrollar alternativas contra enfermedades como el cáncer, microorganismos fármaco resistentes y la diabetes. La estrategia que utilizamos es la preparación de nanopartículas con un tamaño entre 20 a 80 nm y diferentes morfologías, buscando que tengan un efecto farmacológico intrínseco, la funcionalización de nanopartículas con fármacos o moléculas para promover el anclaje en sitios específicos de la membrana celular y nanocápsulas para el transporte y liberación controlada de fármacos.'
            }
        ]
    },
    {
        name: 'Conversión de Energía',
        img: TILACOIDE,
        parrafos: []
    },
    {
        name: 'Biosensores Electroquimicos',
        img: BIOSENSORES,
        parrafos: []
    },
    {
        name: 'Actuadores Electroquímicos',
        img: ACTUADORES,
        parrafos: []
    },
    {
        name: 'Bioelectrónica',
        img: BIOSENSORES2,
        parrafos: []
    }
]


const VolverAHome = () =>{
    return(
            <Link className='z-3 text-decoration-none text-light position-fixed bottom-0 end-0 my-2 mx-5 color-1 px-2 rounded' to='/'><i className="bi bi-house mx-1 fs-4"></i></Link>
    )
}

export const LineaTemplate = ( params, {data}) =>{
    window.scrollTo(0,0);

    const [info, setInfo] = useState()

    useEffect(()=>{
    setInfo(LineasText[DicLinea[params.linea]])
    },[params])

    return(
        <>
      
        <section className="section-linea-investigacion">
        <br />


        <main className='main-article-container'>
            <VolverAHome/>

        
            <article className='container'>    

                <div className="row g-5">
                    <div className="img-article-container">
                        <h1> {params.linea} </h1>
                        
                        <img style={{maxHeight: '600px'}} src={info && info.img} className="img-thumbnail" alt={info && info.img}/>
                    </div>
                    
                    <div className="col-md-8">   
                        <PostMetaData hidden={true}></PostMetaData>
                        <h2>{ info && info.name}</h2>
                        {info && info.parrafos.map((info,idx)=>{
                            return(
                                <BlogParagraph text={info.text}></BlogParagraph>
                            )
                        })}

                    </div>
                        
                        <SideBarLineas></SideBarLineas>

                </div>

            </article>

            <AlumnosRelacionados params={params}></AlumnosRelacionados>

        </main>


        <Footer></Footer>

        </section>
        </>
    )
}


