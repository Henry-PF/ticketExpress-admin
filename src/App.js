import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import CreateBus from './components/CreateBus/CreateBus';
import CreateRoute from './components/CreateRoute/CreateRoute';
import CreateCompany from './components/CreateCompany/CreateCompany';
import ModifyBus from './components/ModifyBus/ModifyBus';
import ModifyCompany from './components/ModifyCompany/ModifyCompany';
import ModifyRoute from './components/ModifyRoute/ModifyRoute';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/create_bus' element={<CreateBus />} />
          <Route exact path='/create_company' element={<CreateCompany />} />
          <Route exact path='/create_route' element={<CreateRoute />} />
          <Route exact path='/modify_bus' element={<ModifyBus />} />
          <Route exact path='/modify_company' element={<ModifyCompany />} />
          <Route exact path='/modify_route' element={<ModifyRoute />} />
        </Routes>
      </div>
  );
}

export default App;
