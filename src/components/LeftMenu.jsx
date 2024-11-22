import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LeftMenu.css';

const LeftMenu = ({ isActive, sidebarRef }) => {
    
    return (
        <nav ref={sidebarRef} className={`sidebar ${isActive ? 'active' : ''}`}>

        <ul className="list">
            <li className="list-item active">
                <a href="#">
                    <i className='bx bx-user'></i>
                    <span className="link-name" >Профиль</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" >Дашборд</span>
                </a>
            </li>
            <li className="list-item">
                <a>
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" >Вкладка 3</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" >Вкладка 4</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" >Вкладка 5</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" >Вкладка 6</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-cog'></i>
                    <span className="link-name" >Настройки</span>
                </a>
            </li>
            <li className="list-item">
                <Link to={"/"}>
                    <i className='bx bx-power-off'></i>
                    <span className="link-name" >Выход</span>
                </Link>
            </li>
        </ul>
    </nav>
    );
};

export default LeftMenu;