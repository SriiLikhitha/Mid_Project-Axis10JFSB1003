import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login";
import { Routes, BrowserRouter, Route, Navigate, NavLink,Outlet } from "react-router-dom";

import "./styles.css";
import MainMenu from './Components/MainMenu';
import Signup from "./Components/SignUp";
import EmployeeTaskList from './Components/EmployeeTastList';
import People from "./Components/People";

function AppLayout() {
  return (
    <div>
      <h1>App Layout</h1>
      <NavLink to="/app/task">Tast</NavLink><br />
      <NavLink to="/app/user">user</NavLink>
     <Outlet />
      {/* <Route /> */}
    </div>
  );
}

function Layouts() {
  return (
    <Routes>
      <Route path="/auth" >
          <Route index={true} element={<Login type="emp" />} />
            <Route index={false} path="mngLogin" element={<Login />} />
            <Route index={false} path="EmpSignup" element={<Signup />} />
        </Route>
      <Route path="/app" element={<MainMenu />} >
      <Route  path="tasks" element={<EmployeeTaskList />} />
      <Route path="peoples" element={<People />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/auth" replace />}
    />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
