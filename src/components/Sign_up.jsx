import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign_up = ({ onSwitch }) => {

    const navigate = useNavigate();
    const handleSignIn = () => {
    navigate('/Sign_in');
  };

  useEffect(() => {
    document.title = "Регистрация";
  }, []);
    return (
    <div className="wrapper">
        <form action="">
            <h1>Регистрация</h1>
            <div className="input-box">
                <input type="text" placeholder="Имя пользователя" required/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="email" placeholder="Почта" required/>
                <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Пароль" required/>
                <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Повторите пароль" required/>
                <i className='bx bxs-lock-alt'></i>
            </div>

            <button type="submit" className="btn" onClick={handleSignIn}>Зарегистрироваться</button>
            <div className="register-link">
                <p>Есть учетная запись?{" "}
                <a onClick={onSwitch}>Войти</a>
                </p>
            </div>
        </form>
    </div>
    );
};

export default Sign_up;