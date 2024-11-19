import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web'
import Sign_in from "./components/Sign_in";
import Sign_up from "./components/Sign_up";
import User from "./components/user";
import { Transition } from "react-transition-group";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route 
          path="/Sign_in" 
          element={<Auth />} />

        <Route 
          path="/Sign_up" 
          element={<Reg />} />
        
        <Route
          path="/User"
          element={<User />}/>

        <Route path="*" element={<Navigate to="/Sign_in" />} />
      </Routes>
    </Router>
  );
};

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Sign_in onSwitch={() => navigate("/Sign_up")} />
    </div>
  );
};

const Reg = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Sign_up onSwitch={() => navigate("/Sign_in")} />
    </div>
  );
};

export default App;