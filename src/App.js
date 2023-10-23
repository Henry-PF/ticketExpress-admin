import { Route, Routes } from 'react-router-dom';
import CreateRoute from './components/CreateRoute/CreateRoute';

import Selection from './components/Selection/Selection';
import CreateCompany from './CreateCompany/CreateCompany';
import CreateBus from './CreateBus/CreateBus';
import ModifyCompany from './ModifyCompany/ModifyCompany';
import ModifyBus from './ModifyBus/ModifyBus';
import ModifyRoute from './ModifyRoute/ModifyRoute';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Selection />} />
          <Route path='/create_company' element={<CreateCompany />} />
          <Route path='/create_bus' element={<CreateBus />} />
          <Route path='/create_route' element={<CreateRoute />} />
          <Route path='/modify_company' element={<ModifyCompany />} />
          <Route path='/modify_bus' element={<ModifyBus />} />
          <Route path='/modify_route' element={<ModifyRoute />} />
        </Routes>
      </div>
  );
}

export default App;
