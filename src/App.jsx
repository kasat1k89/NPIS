import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sign_in from "./components/Sign_in";
import User from "./components/user";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route 
          path="/Sign_in" 
          element={<Auth />} />
        
        <Route
          path="/User"
          element={<User />}/>
        

        <Route path="*" element={<Navigate to="/Sign_in" />} />
      </Routes>
    </Router>
  );
};

const Auth = () => {

  return (
    <div>
      <Sign_in />
    </div>
  );
};


export default App;