import React, { useState, useEffect, useRef } from "react";
import './User.css';
import UpperMenu from "./UpperMenu";
import LeftMenu from "./LeftMenu";

const User = () => {
    const [isActive, setIsActive] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false); // Состояние для сворачивания
    const sidebarRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleSidebar = (event) => {
        event.stopPropagation();
        setIsActive((prevState) => !prevState);
        setIsCollapsed((prevState) => !prevState); // Переключаем сворачивание
    };

    const handleClickOutside = (event) => {
        if (
            window.innerWidth <= 768 &&
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            burgerRef.current &&
            !burgerRef.current.contains(event.target)
        ) {
            setIsActive(false);
            setIsCollapsed(false); // Сбрасываем сворачивание
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
            <UpperMenu burgerRef={burgerRef} toggleSidebar={toggleSidebar} />
            <LeftMenu sidebarRef={sidebarRef} isActive={isActive} isCollapsed={isCollapsed} />
        </>
    );
};

export default User;
