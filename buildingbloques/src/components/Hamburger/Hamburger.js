import { useState } from 'react'
import React from 'react';
import logo from '../../assets/Logo.png'
import {BsLinkedin, BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'

export default function Hamburger (){
    const [toggle, setToggle] = useState(false)

  return(
    <>
        <div className="navHeader">
            <a href="#" className="mobileLogo"><img src={logo} alt="Logo" /></a>
            <div className={toggle ? "change" : "navToggle"} onClick = {()=> setToggle(!toggle)}>
                <div className="bar bOne" >{toggle}</div>
                <div className="bar bTwo"></div>
                <div className="bar bThree"></div>
            </div> 
        </div>

        {toggle  && <div className={toggle ? "mobileMenu" : "active"}>
            <ul className="navItems">
                <li className="navList"><a href="/" className="navLink">About</a></li>
                <li className="navList"><a href="/" className="navLink">Services</a></li>
                <li className="navList"><a href="/" className="navLink">Projects</a></li>
                <li className="navList"><a href="/" className="navLink">Contact</a></li>
            </ul>
            <div className="navFooter">
                <div className="navSocialLinks">
                    <a href="/" className="SocialLink"><BsLinkedin /></a>
                    <a href="/" className="SocialLink"><BsInstagram /></a>
                    <a href="/" className="SocialLink"><BsTwitter /></a>
                    <a href="/" className="SocialLink"><BsFacebook /></a>
                </div>
                <div className="copyrightWhite">
                    <p>© 2021 building bloques, inc.</p>
                </div>
            </div>
        </div>}

    </>
  )
};