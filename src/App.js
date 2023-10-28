import React from "react";

import { Route, Routes } from "react-router-dom";
import CreateRoute from "./components/CreateRoute/CreateRoute";

import Selection from "./components/Selection/Selection";
import CreateCompany from "../src/components/CreateCompany/CreateCompany";
import CreateBus from "../src/components/CreateBus/CreateBus";
import ModifyCompany from "../src/components/ModifyCompany/ModifyCompany";
import ModifyBus from "../src/components/ModifyBus/ModifyBus";
import ModifyRoute from "../src/components/ModifyRoute/ModifyRoute";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route exact path="/" element={<Selection />} />
        <Route path="/create_company" element={<CreateCompany />} />
        <Route path="/create_bus" element={<CreateBus />} />
        <Route path="/create_route" element={<CreateRoute />} />
        <Route path="/modify_company" element={<ModifyCompany />} />
        <Route path="/modify_bus" element={<ModifyBus />} />
        <Route path="/modify_route" element={<ModifyRoute />} />
      </Routes>
    </div>
  );
}

export default App;
