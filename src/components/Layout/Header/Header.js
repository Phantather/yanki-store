import React, {useContext} from 'react';
import {Link} from "react-router-dom";


import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {IoIosLogOut} from 'react-icons/io'

import logo from '../../../assets/logo.svg'
import {CustomContext} from "../../../utils/Context";

const Header = () => {

    const {cart, favorites} = useContext(CustomContext)
    let logout = localStorage.getItem("user")
    const {user, setUser} = useContext(CustomContext)

    const logOut = () => {
        localStorage.removeItem("user")
        setUser({})
    }
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className="header__links">
                        <Link className='header__link' to={'/'}>Главная</Link>
                        <Link className='header__link' to={'/shop'}>КАТАЛОГ</Link>
                        <Link className='header__link' to={'/about'}>О НАС</Link>
                        <Link className='header__link' to={'/admin-panel'}>Admin Panel</Link>
                    </div>
                    <h1 className='header__title'>
                        <img src={logo} alt=""/>
                    </h1>
                    <div className="header__icons">
                        {
                            logout ? <IoIosLogOut onClick={logOut}/> : <Link to={'/register'}>
                                <AiOutlineUser/>
                            </Link>
                        }

                        <Link to={'/favorites'}>
                            <AiOutlineHeart/>
                            {
                                favorites.length ? <sup>{favorites.length}</sup> : ''
                            }

                        </Link>
                        <Link to={'/cart'}>
                            <AiOutlineShoppingCart/>
                            {
                                cart.length ? <sup>{cart.length}</sup> : ''
                            }

                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;