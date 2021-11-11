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
                <Link to='main' className='logo'>
                    <img src={logo} alt="" />
                </Link>

            </nav>
            
        </Fragment>
    );
};

export default Navbar;