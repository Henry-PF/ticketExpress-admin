import { Route, Routes } from 'react-router-dom';
import Home from './components/LandingPage/Home/Home';
import Login from './components/Login/Login';
/* Rutas Buses */
import Create from './components/LandingPage/Buses/CreateBuses/Create';
import Delete from './components/LandingPage/Buses/DeleteBuses/Delete';
import Update from './components/LandingPage/Buses/UpdateBuses/Update';
import Read from './components/LandingPage/Buses/ReadBuses/Read';
/* Rutas Empresas */
import CreateEmpresas from './components/LandingPage/Empresas/CreateEmpresas/Create';
import DeleteEmpresas from './components/LandingPage/Empresas/DeleteEmpresas/Delete';
import UpdateEmpresas from './components/LandingPage/Empresas/UpdateEmpresas/Update';
import ReadEmpresas from './components/LandingPage/Empresas/ReadEmpresas/Read';
/* Rutas Terminales */
import CreateTerminales from './components/LandingPage/Terminales/CreateTerminales/Create';
import DeleteTerminales from './components/LandingPage/Terminales/DeleteTerminales/Delete';
import UpdateTerminales from './components/LandingPage/Terminales/UpdateTerminales/Update';
import ReadTerminales from './components/LandingPage/Terminales/ReadTerminales/Read';
/* Rutas Login */

/* Rutas Dashboard */

/* Rutas Usuarios */


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Rutas Buses */}
        <Route exact path='/admin/buses/create' element={<Create />} />
        <Route exact path='/admin/buses/delete' element={<Delete />} />
        <Route exact path='/admin/buses/update' element={<Update />} />
        <Route exact path='/admin/buses/read' element={<Read />} />
        {/* Rutas Empresas */}
        <Route exact path='/admin/empresas/create' element={<CreateEmpresas />} />
        <Route exact path='/admin/empresas/delete' element={<DeleteEmpresas />} />
        <Route exact path='/admin/empresas/update' element={<UpdateEmpresas />} />
        <Route exact path='/admin/empresas/read' element={<ReadEmpresas />} />
        {/* Rutas Terminales */}
        <Route exact path='/admin/terminales/create' element={<CreateTerminales />} />
        <Route exact path='/admin/terminales/delete' element={<DeleteTerminales />} />
        <Route exact path='/admin/terminales/update' element={<UpdateTerminales />} />
        <Route exact path='/admin/terminales/read' element={<ReadTerminales />} />
        {/* Rutas Login */}
        <Route exact path='/' element={<Login />} />
        {/* Rutas Dashboard */}
        <Route exact path='/admin/home' element={<Home />} />
        {/* Rutas Usuarios */}
        {/* <Route exact path='/admin/usuarios' element={<Usuarios />} /> */}
      </Routes>
    </div>
  );
}

export default App;
