import React, { useState, useEffect } from "react";
import './User.css';
import UpperMenu from "./UpperMenu";
import LeftMenu from "./LeftMenu";


const User = () => {

    const [isActive, setIsActive] = useState(false);
  
    const toggleSidebar = () => {
        setIsActive((prevState) => !prevState);
};

    useEffect(() => {
        document.title = "Главная";
      }, []);

    return (
        <>
        <UpperMenu toggleSidebar={toggleSidebar}/>
        <LeftMenu isActive={isActive}/>
        </>
        
    );
};

export default User;