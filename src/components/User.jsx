import React, { useState, useEffect, useRef } from "react";
import './User.css';
import UpperMenu from "./UpperMenu";
import LeftMenu from "./LeftMenu";


const User = () => {

    const [isActive, setIsActive] = useState(false);
    const sidebarRef = useRef(null);
    const burgerRef = useRef(null); // Отслеживаем кнопку "бургера"
  
    const toggleSidebar = (event) => {
        event.stopPropagation();
        setIsActive((prevState) => !prevState);
};

    const handleClickOutside = (event) => {
    // Если клик произошел вне бокового меню
        if (window.innerWidth <= 768 && sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            burgerRef.current &&
            !burgerRef.current.contains(event.target)) {
      setIsActive(false);
    }
};

    useEffect(() => {
        document.title = "Главная";
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
        <>
        <UpperMenu burgerRef={burgerRef} toggleSidebar={toggleSidebar}/>
        <LeftMenu sidebarRef={sidebarRef} isActive={isActive}/>
        </>
        
    );
};

export default User;