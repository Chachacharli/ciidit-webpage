

const Dirección_Individualizada = [
    {
        tag: 'Director de tesis de Doctorado',
        body: [

            {
                puesto: 'Director de la tesis',
                id: '1',
                tesis: [
                    {
                        id: '1',
                        title: 'Director de la tesis',
                        text: 'Desarrollo de Materiales 2D Nanoestructurados Basados en Fosfatos y Tiofosfatos de Metales de Transición Intercalados con Grafeno Para Capacitores Electroquímicos. Facultad de Ingeniería Mecánica y Eléctrica, Universidad Autónoma de Nuevo León. 2018. Autor: Jorge Alexis Zúñiga Martínez, 1880644. En progreso.'
                    }
                ]
            },
            {
                puesto:'Codirector de Tesis',
                id: '2',
                tesis:
                [
                    {
                        id: '2',
                        title: 'Codirector de Tesis',
                        text: 'Síntesis y Evaluación del Efecto Antimicrobiano y Anticancerígeno de las Nanopartículas de Fosfato de Vanadio y Aportaciones al Mecanismo de Acción “in vitro”. Nivel Doctorado. Autor: Adela Sánchez Oseguera., 1829361. En progreso.'
                    }
                ]
            }
            
        ]    
        
    },
    {
        tag: 'Director de tesis de Maestría',
        body: [
            {
                puesto: 'Director de la tesis',
                id: '3',
                tesis: [
                    {
                        id: '3',
                        title: 'Director de la tesis',
                        text: ' Preparación de Microsupercapacitores Asimétricos Basados en Fosfatos de Vanadio y Fosfatos de Manganeso Nanoestructurados. Nivel Maestría. Facultad de Ingeniería Mecánica y Eléctrica, Universidad Autónoma de Nuevo León. 2018. Autor: Jorge Alexis Zúñiga Martínez, 1880644. Terminada. '
                    }
                ]
            },
            {
                puesto: 'Codirector de Tesis',
                id: '4',
                tesis: [
                    {
                        id: '4',
                        title: '',
                        text: 'Inmovilización y Caracterización de la Enzima Pepsina en Nanofibras Poliméricas Mediante Técnica de Electrohilado. Nivel Maestría. Facultad de Ingeniería Mecánica y Eléctrica, Universidad Autónoma de Nuevo León. 2018. Autor: Julia Margarita Loredo Alejos, 1451548. Terminada.'
                    },
                    {
                        id: '5',
                        title: 'Codirector de Tesis',
                        text: 'Desarrollo de Matrices Nanofibrosas Poliméricas con Potenciales Aplicaciones en Nanomedicina con un Enfoque Oftalmológico. Nivel Maestría. Facultad de Ingeniería Mecánica y Eléctrica, Universidad Autónoma de Nuevo León. 2018. Autor: Francisco Javier Martínez Vázquez, 1506814. Terminada.'
                    },      
                    {
                        id: '6',
                        title: 'Codirector de Tesis',
                        text: 'Degradación Fotocatalítica de Sulfametoxazol Utilizando ZnO/NTC Soportado en Nailon 6,6. Nivel Maestría. Autor: Edith Guadalupe Luna Reséndiz, 1940252. En progreso.'
                    },     
                    {
                        id: '7',
                        title: 'Codirector de Tesis',
                        text: 'Síntesis y Caracterización de Fosfatos de Vanadio para Electrodos en Capacitores Electroquímicos. Nivel Maestría. Facultad de Ingeniería Mecánica y Eléctrica, Universidad Autónoma de Nuevo León. 2016. Autor: Arnulfo López Meléndez, 1452959. Terminada'
                    }, 
                ]
            },

                                  
        ]    
        
    },
    {
        tag: 'Director de Tesis de Licenciatura',
        id: '5',
        body: [
            {
                puesto: 'Director de la tesis',
                tesis: [
                    {
                        id: '8',
                        title: 'Director de la tesis',
                        text: 'Extracción e Inmovilización de Membranas de Tilacoides en Nanofibras Poliméricas Flexibles. Nivel Licenciatura. Autor: Elaine Stefany Jara Arreozola. Terminada. 2020.'
                    },
                ]
            }


        ]    
        
    },    
]



const ContentCollapse = ({id, body}) => {
    return(
        <div class="collapse" id={`collapseDoctorado${id}`}>                        
            {body.map((obj) => {
                return(
                        <p key={ obj.text} style={{textAlign: 'justify'}}>
                            {obj.text}
                        </p>
                )
            })}
        </div>
      
    )
}


const TitleCollapse = ({id, title}) =>{
    return(
        <> 
        <h5 
        className="my-4 text-center "
        data-bs-toggle="collapse" 
        href={`#collapseDoctorado${id}`}
        role="button" 
        aria-expanded="false" 
        aria-controls="collapseExample">
                {title}
        </h5>
        <hr />
        </>
    )
}


const TTitle = ({title}) => {
    return(
        <h4 className="text-center fw-bolder header-tesis-card">{title}</h4>
    )
}

const TCollapse = ({tag, body}) => {
    return(
        <>
        <TTitle title={tag}/>
        {body.map((tesis) => {
            return(
                <div key={tesis.title}>
                    <TitleCollapse id={tesis.id} title={tesis.puesto}></TitleCollapse>
                    <ContentCollapse id={tesis.id} body={tesis.tesis}></ContentCollapse>
                </div>
            )
        })}

        </>
    )
}

const TCard = ({children}) => {
    return(
        <div className="card card-tesis-container col-md-3 p-4">
            <div className="card-tesis">
                {children}
            </div>  
        </div>
    )
}

const TDoctorado = () => {
    return(
        <div className="row gap-5 d-flex justify-content-around">

            {Dirección_Individualizada.map((direccion)=>{
                return(
                    <TCard key={direccion.tag}>
                        <TCollapse tag={direccion.tag} body={direccion.body}/>
                    </TCard>
                )
            })}
        </div>

    )
}


const SectionTesis = () =>{
    return(
        <div className="container">
            
            <TDoctorado/>

        </div>
    )
}

export default SectionTesis;