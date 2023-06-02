import './App.css';
import { Home } from './components/Home/Home';
import { Landing } from './components/Landing/Landing';
import { GoBack } from './components/GoBack/GoBack';
import { Alumnos } from './components/Alumnos/Alumnos';
import { FotosGrupales } from './components/FotosGrupales/FotosGrupales';
import { LineasInvestigacion } from './components/LineasInvestigacion/LineasInvestigacion';
import { Blog } from './components/Blog/Blog';
import { Eventos } from './components/Eventos/Eventos';
import { Contacto } from './components/Contacto/Contacto';
import { Publicaciones } from './components/Publicaciones/Publicaciones';
import { LineaInvestigacion } from './pages/LineaInvestigacion';
import { Colaboradores } from './components/Colaboradores/Colaboradores';
import { TodasLasEntradas } from './components/TodasLasEntradas/TodasLasEntradas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Proyectos } from './components/Proyectos/Proyectos';
import VisitCounter from './components/VisitCounter/VisitCOunter';
import { useEffect, useRef, useState } from 'react';
import Post from './pages/Post';

const MainPage = () =>{
  window.scrollTo(0,0);

  return(
    <>
      {/*<Navbar></Navbar>*/}
      <Landing> </Landing>  
      {/* <Indice></Indice> */}
      <Home></Home>
      <Proyectos></Proyectos>
      <Publicaciones></Publicaciones>
      <Alumnos></Alumnos>
      <FotosGrupales></FotosGrupales>
      <LineasInvestigacion></LineasInvestigacion>
      <Colaboradores/>
      {/*<Blog></Blog>*/}
      <Eventos></Eventos>
      <Contacto></Contacto>
      <GoBack href='#Landing'/>  
    </>
  )
}



function App() {
  const [visits, setVisits] = useState(0)
  const shoullog = useRef(true)
  useEffect(()=>{
    if( shoullog.current ){
      shoullog.current = false
      fetch('https://api.countapi.xyz/update/rlucioporto/webpage/?amount=1')
      .then(res => res.json())
      .then(res =>setVisits(res.value)) 
    }
  
  },[])

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<MainPage/>} ></Route> 
        <Route path='/Linea/:name' element={<LineaInvestigacion />}></Route>
        <Route path='/Blog' element={<Post/>}></Route>
        <Route path='/visit' element={<VisitCounter/>}></Route>
        <Route path='/Entradas'  element={<TodasLasEntradas/>}></Route>
        <Route path='*' element={ <h1> NOT FOUND </h1> }></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
