
import { NavLink } from 'react-router-dom';
//import '../assets/CSS/index.css'
import Logo from '../assets/img/Logo.png';

function Menu(): React.JSX.Element {
  return (
    <>
        <header>
            <div className="logo-button">
            <img src={Logo} width="50px" height="50px" alt=""/>
            </div>
            <div className="memu-buttons">
            <div className="dropdown">
                <button className="dropbtn">Модификации</button>
                <div className="dropdown-content">
                    <a href="#">Поиск по играм</a>
                    <a href="#">Список модов</a>
                    <a href="#">Случайная модификация</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Техническая поддержка</button>
                <div className="dropdown-content">
                    <a href="#">Правила</a>
                    <a href="#">Пожаловаться</a>
                    <a href="#">О нас</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Форум</button>
                <div className="dropdown-content">
                    <a href="#">Ссылка 1</a>
                    <a href="#">Ссылка 2</a>
                    <a href="#">Ссылка 3</a>
                </div>
            </div>
            </div>
            <div className="auth-button">
                <NavLink className="button-link" to="/Logging">Авторизация</NavLink>
                <NavLink className="button-link" to="/Registration">Регистрация</NavLink>
            </div>
        </header>
    </>
  )
}

export default Menu