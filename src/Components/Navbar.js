import React, {Fragment, useState} from 'react';
import {Link} from "react-scroll";
import logo from "../images/logo1.png" ;

const Navbar = () => {
    const [nav,setNav]=useState(false)

    const changeBakground=()=>{
        if (window.scrollY>=50){
            setNav(true);
        }
        else {
            setNav(false);
        }
    }

    window.addEventListener('scroll',changeBakground);

    return (
        <Fragment>

            <nav className={nav?"nav active":"nav"}>
                <Link to='main' className='logo' smooth={true} duration={500}>
                    <img src={logo} alt="" />
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className="menu-icon" for='menu-btn'>
                    <span className="nav-icon"></span>
                </label>
                <ul className="menu">
                    <li><Link to="main" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>

                </ul>

            </nav>
            
        </Fragment>
    );
};

export default Navbar;