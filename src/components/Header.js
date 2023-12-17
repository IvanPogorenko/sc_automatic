import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="Header">
            <div className='Logo'>
                <img alt='logo' src='/img/logo.png'></img>
                <p>АВТОМАТИКА</p>
            </div>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/about-us">О нас</Link>
                </li>
                <li>
                    <Link to="/projects">Проекты</Link>
                </li>
                <li>
                    <Link to="/services">Услуги</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
                <input type={"search"} placeholder="Поиск"></input>
            </ul>
        </div>
    );
}
export default Header;