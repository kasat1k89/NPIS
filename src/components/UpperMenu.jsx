import React, { useState } from "react";
import ProfileBtn from "./ProfileBtn";
import './UpperMenu.css';
import logo from '../assets/logo.png';

const UpperMenu = ({ toggleSidebar, burgerRef }) => {

    return (
        <header className="header">

            <div className="logotype">
                <div className="logo-menu">
                    <i className='bx bx-menu toggle-btn' ref={burgerRef} onClick={toggleSidebar}></i>
                </div>
                <img src={logo} alt="Logo" />
            </div>
            
            <nav className="navbar">

                <i className="bx bx-bell" style={{ color: "#ffffff", fontSize: "24px" }}></i>
                <ProfileBtn/>
            </nav>
        </header>
    );
};

export default UpperMenu;