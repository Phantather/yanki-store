import React from 'react';
import {Link} from "react-router-dom"
import logo from '../../../assets/logo.svg'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__links">
                        <Link className="header__link" to={'/'}>ГЛАВНАЯ</Link>
                        <Link className="header__link" to={'/catalog'}>КАТАЛОГ</Link>
                        <Link className="header__link" to={'/about'}>О НАС</Link>
                    </div>

                    <div className="header__icons">
                        <Link to={'/register'}>
                           <AiOutlineUser/>
                        </Link>
                        <Link to={'/favorites'}>
                            <AiOutlineHeart/>
                        </Link>
                        <Link to={'/cart'}>
                            <AiOutlineShoppingCart/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;