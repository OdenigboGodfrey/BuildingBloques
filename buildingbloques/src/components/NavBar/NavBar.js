import logo from '../../assets/Logo.png';
import '../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import React from 'react';

export default function Header () {
    
    return(
        <header className="navigation">
            <div className="mobileDisplay">
                <Hamburger />
            </div>

            <div className="desktopDisplay">
                <a href="#" className="mobileLogo"><img src={logo} alt="Logo" /></a>
                <ul className="navItems">
                    <li className="navList"><a href="#" className="navLink">About</a></li>
                    <li className="navList"><a href="#" className="navLink">Services</a></li>
                    <li className="navList"><a href="#" className="navLink">Projects</a></li>
                </ul>
                <div className="navRight"><a href="#" className="navLink">Contact</a></div>
            </div>
        </header>
    )
};
