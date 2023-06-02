import { Footer } from '../Footer/Footer'
import { SideBarLineas } from './SideBarLineas'
import { PostMetaData } from './PostMetaData'
import { BlogParagraph } from './BLogParagraph'
import { AlumnosRelacionados } from './AlumnosRelacionados'
import { useEffect } from 'react'
import { useState } from 'react'
import VolverAHome from './VolverAHome'
import '../../styles/lineaInvestigaciontemplate.css'

import SUPERCAPACITOR from '../../assets/Supercapacitor_electroquimcio_1.png'
import FARMACOS from '../../assets/infografias/NanocapsulasFarmacos.png'
import TILACOIDE from '../../assets/Membrana_de _tilacoides.png'
import BIOSENSORES from '../../assets/infografias/BiosensoresElectroquimicos.png'
import ACTUADORES from '../../assets/Actuadores_electroquimicos.png'
import BIOELECTRONICA from '../../assets/infografias/Bioelectronica.png'

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
        img: FARMACOS,
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
        parrafos: [ { text: 'La energía permite el progreso, las comodidades y los avances tecnológicos que tiene la sociedad moderna. Hace posible los avances en el área de la salud, alimentos, dispositivos electrónicos y muchas más. Desafortunadamente, la energía es obtenida por medio de combustibles fósiles, cuya combustión tiene un gran impacto en el medio ambiente.'},
                    {text: 'La producción de energía limpia y de bajo costo es una prioridad a nivel mundial. Se están desarrollando diversos sistemas para la conversión de energía solar, eólica y mecánica en energía eléctrica.'}, 
                    {text :'En nuestro grupo de investigación estamos trabajando son sistemas de conversión en energía solar en energía eléctrica por medio de Celdas FotoBioElectroquímicas (FBE). Las celdas FBE utilizan las estructuras celulares encargadas del proceso de la Fotosíntesis, llamadas Tilacoides. Los Tilacoides son aislados de hojas de espinaca e inmovilizados en la superficie de un conductor electrónico como grafeno, carbón activado o nanotubos de carbono. Al ser irradiados con luz solar los Tilacoides inician el proceso fisicoquímico para captar y transformar los fotones en electrones. El conductor electrónico como el grafeno extrae los electrones. El proceso global permite convertir los fotones en corriente eléctrica.' },

                    {text : 'La línea de investigación consiste en utilizar diferentes tipos de sustratos nanoestructurados para funcionalizamos con polimorfos de carbono como grafeno para incrementar la estabilidad de los Tilacoides y la eficiencia de conversión de energía solar en eléctrica. Además, estudiamos diferentes formas de ensamblar la celda fotoelectroquímica, por ejemplo, utilizando impresión 2D y 3D.'} ,
                    {text: 'Otra de nuestras líneas de conversión de energía consiste en utilizar el efecto Triboeléctrico, que a través de la fricción mecánica entre dos materiales puede cargar su superficie con cargas opuestas generando así, una diferencia de potencial y el movimiento de cargas. De esta forma se convierte la energía mecánica en energía eléctrica. De acuerdo con sus propiedades fisicoquímicas los materiales adquieren cargas negativas o positivas mediante el contacto mecánico. '},
                    {text: 'En esta línea de investigación trabajamos con celdas Triboeléctricas para convertir la energía mecánica en eléctrica. Se proponen diferentes sustratos compuestos de nanofibras poliméricas y grafeno (o carbón activado, nanotubos de carbono) para ensamblar las celdas Triboeléctricas. Además, se está trabajando en la funcionalización de los sustratos con materiales nanoestructurados de origen inorgánico, orgánico y biológico con el objetivo de incrementar la eficiencia en la conversión de energía mecánica a eléctrica. '} ]
    },
    {
        name: 'Biosensores Electroquimicos',
        img: BIOSENSORES,
        parrafos: [
                    { text: 'Los biosensores electroquímicos son dispositivos capaces de recibir una señal o estímulo al interactuar con una especie química (analito) generando un cambio de potencial (voltaje) o corriente. El material o sensor responsable de responder frente a la presencia del analito, puede ser de naturaleza inorgánica, orgánica o biológica. Constan de dos electrodos y un electrolito. '}, 
                    { text: 'Los biosensores electroquímicos comúnmente se utilizan en la detección de sustancias tóxicas, cáncer, virus como el SARS-CoV-2 (COVID-19), metabolitos como la glucosa, iones orgánicos como inorgánicos, entre otras. '},
                    { text: 'Recientemente, con el uso de la nanotecnología, los biosensores electroquímicos se miniaturizan a escala de micrómetros o nanómetros utilizando materiales nanoestructurados y tecnologías de impresión 2D, 3D, electrosíntesis y métodos físicos de deposición de nanomateriales. '},
                    { text: 'El uso de nanomateriales en los electrodos de los biosensores electroquímicos permite tener una gran área superficial, permitiendo incrementar los límites de detección, la amplificación de la señal, incrementar la carga de material activo. Cuando los nanomateriales son compositos o materiales funcionalizados, esto permite monitorear más de una señal simultáneamente.'},
                    { text: 'Con esto, surge la potencial aplicación de implantar los biosensores electroquímicos en el cuerpo humano para el monitoreo en tiempo real, no solo de metabolitos, también de señales cardiacas o neuronales entre otras. La preparación de estos electrodos a micro y nano escala permitirá su uso en dispositivos electrónicos implantados (Bioelectrónica) para el monitoreo de señales en tiempo real.'},
                    {text: 'En nuestro grupo de investigación trabajamos con biosensores electroquímicos para la detección de glucosa, cáncer y para monitorear señales cardiacas. Adicionalmente, estamos desarrollando neurosensores electroquímicos para monitorear las señales de las neuronas y contar con modelos para su estudio. Los biosensores electroquímicos, se están desarrollando por medio de técnicas de impresión 2D y 3D y por medio de electrosíntesis de películas delgadas. '}]
    },
    {
        name: 'Actuadores Electroquímicos',
        img: ACTUADORES,
        parrafos: [
            {text: ''}
        ]
    },
    {
        name: 'Bioelectrónica',
        img: BIOELECTRONICA,
        parrafos: [
            {text: 'La Bioelectrónica es un área emergente, cuyo objetivo es el monitoreo, procesamiento y estimulación a tejidos y órganos para el restablecimiento o recuperación de sus funciones. Los sistemas bioelectrónicos consisten en biosensores electroquímicos, amplificador de señales, biosupercapacitores para el suministro de energía, controlador para el almacenamiento y procesamiento de datos. El biodispositivo electrónico es implantado en el cuerpo humano. '},
            {text: 'Por medio de la recolección de bioseñales fisiológicas, electrofisiológicas, electroquímicas y mecánicas se realiza un diagnostico preciso que permite a los biodispositivos implantados actuar, generando estímulos para la liberación de fármacos, impulsos eléctricos a bioactuadores electroquímicos para expansión y contracción de fibras musculares, venas o arterias, etc.'},
            {text: 'En nuestro equipo de investigación desarrollamos todos los componentes de los biodispositos electrónicos, uniendo así diversas áreas de la ciencia, nanotecnología e ingeniería mecánica y electrónica. Los proyectos que desarrollamos en las otras líneas de investigación convergen en esta.'},
            {text: 'En nuestro laboratorio estamos desarrollando un biodispositivo electrónico para liberación controlada de fármacos. El cual está compuesto por hidrogeles cargados con fármacos conectados a electrodos impresos y por medio de impulsos eléctricos el hidrogel libera al fármaco. Un Controlador recibe la señal y toma la decisión de enviar un estímulo eléctrico al hidrogel cuando se requiere la liberación de fármacos. El biodispositivo electrónico cuenta con un biosupercapacitor para suministrar energía. Todo el biodispositivo está desarrollado con nanomateriales biocompatibles.'},
            {text: 'Los actuadores electroquímicos que se están desarrollando en nuestro laboratorio como músculos artifíciales, requieren de igual forma un controlador capaz de enviar estímulos eléctricos a través de electrodos nanoestructurados para controlar su movimiento. Los nanomateiales son biocompatibles permitiendo implantar el biodispositivo electrónico en el cuerpo humano. '}]
    }
]




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


