import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LeftMenu.css';

const LeftMenu = ({ isActive }) => {
    
    return (
        <nav className={`sidebar ${isActive ? 'active' : ''}`}>

        <ul className="list">
            <li className="list-item active">
                <a href="#">
                    <i className='bx bx-user'></i>
                    <span className="link-name" style={{'--i': 1}}>Профиль</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" style={{'--i': 2}}>Дашборд</span>
                </a>
            </li>
            <li className="list-item">
                <a>
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" style={{'--i': 3}}>Вкладка 3</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" style={{'--i': 4}}>Вкладка 4</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" style={{'--i': 5}}>Вкладка 5</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-grid-alt'></i>
                    <span className="link-name" style={{'--i': 6}}>Вкладка 6</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#">
                    <i className='bx bx-cog'></i>
                    <span className="link-name" style={{'--i': 7}}>Настройки</span>
                </a>
            </li>
            <li className="list-item">
                <Link to={"/"}>
                    <i className='bx bx-power-off'></i>
                    <span className="link-name" style={{'--i': 8}}>Выход</span>
                </Link>
            </li>
        </ul>
    </nav>
    );
};

export default LeftMenu;