import React, { useState, useEffect } from "react";
import './User.css';
import { Link } from "react-router-dom";


const User = () => {
    useEffect(() => {
        document.title = "Главная";
      }, []);

    const [isActive, setIsActive] = useState(false);
  
    const toggleSidebar = () => {
      setIsActive((prevState) => !prevState);
    };

    return (
        <nav className={`sidebar ${isActive ? 'active' : ''}`}>
        <div className="logo-menu">
            <h2 className="logo">Cyberpolygon</h2>
            <i className='bx bx-menu toggle-btn' onClick={toggleSidebar}></i>
        </div>

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
                <a href="#">
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

export default User;