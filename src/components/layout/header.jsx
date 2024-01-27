import '../../styles/layout.scss';
import { useState } from 'react';
import Logo from '../../assets/shared/desktop/logo-dark.png'


/**
 * Header component
 * @component
 */
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <img className="header__logo" src = {Logo} alt = "Designo logo"/>
            <nav className={"header__navigation"}>
                <button onClick={toggleMenu} className="header__hamburger material-symbols-outlined"> {isMenuOpen ? 'close' : 'menu'} </button>
                <ul className={`header__navigation-list ${isMenuOpen ? 'open' : ''}`}> 
                    <li className="header__navigation-item">
                        <a href="/company" className="header__navigation-link">Our company</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/locations" className="header__navigation-link">Locations</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/contact" className="header__navigation-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
