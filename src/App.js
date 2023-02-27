import './App.css';
import { Home } from './components/Home/Home';
import  Indice  from './components/Index/Indice.jsx';
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

const MainPage = () =>{
  return(
    <>
      <Navbar></Navbar>
      <Landing> </Landing>  
      {/* <Indice></Indice> */}
      <Home></Home>
      <Publicaciones></Publicaciones>
      <Alumnos></Alumnos>
      <FotosGrupales></FotosGrupales>
      <LineasInvestigacion></LineasInvestigacion>
      <Blog></Blog>
      <Eventos></Eventos>
      <Contacto></Contacto>
      <GoBack/>  
    </>
  )
}


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} ></Route> 
        <Route path='/Linea/:name' element={<LineaInvestigacion/>}></Route>
        <Route path='/Blog/:name-blog'></Route>
        <Route path='*' element={ <h1> NOT FOUND </h1> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
