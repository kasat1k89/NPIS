import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign_in = ({ onSwitch }) => {

    const navigate = useNavigate();
    const handleSignIn = () => {
    navigate('/User');
  };

  useEffect(() => {
    document.title = "Авторизация";
  }, []);
    return (
    <div className="wrapper">
        <form action="">
            <h1>Авторизация</h1>
            <div className="input-box">
                <input type="text" placeholder="Имя пользователя" required/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Пароль" required/>
                <i className='bx bxs-lock-alt'></i>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/> Запомнить меня</label>
                <a href="#">Забыли пароль?</a>
            </div>

            <button type="submit" className="btn" onClick={handleSignIn}>Войти</button>
            <div className="register-link">
                <p>Нет учетной записи?{" "}
                <a onClick={onSwitch}>Зарегистрироваться</a>
                </p>
            </div>
        </form>
    </div>
    );
};

export default Sign_in;