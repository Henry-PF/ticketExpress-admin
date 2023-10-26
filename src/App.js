import { Route, Routes } from 'react-router-dom';
import Home from './components/LandingPage/Home/Home';
import Login from './components/Login/Login';
import Buses from './components/LandingPage/Buses/Buses';
import Terminales from './components/LandingPage/Terminales/Terminales';
import Usuarios from './components/LandingPage/Usuarios/Usuarios';
import Empresas from './components/LandingPage/Empresas/Empresas';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/admin/home' element={<Home />} />
          <Route exact path='/admin/buses' element={<Buses />} />
          <Route exact path='/admin/terminales' element={<Terminales />} />
          <Route exact path='/admin/usuarios' element={<Usuarios />} />
          <Route exact path='/admin/empresas' element={<Empresas />} />
        </Routes>
      </div>
  );
}

export default App;
