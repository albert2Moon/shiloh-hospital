/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation(); // Get the current URL path

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsClicked(false);
    };

    const isActive = (path) => {
        const exactMatch = location.pathname === path;
        const startsWithMatch = location.pathname.startsWith(path);

        if (exactMatch) {
            return 'active-link';
        }

        if (startsWithMatch && path !== '/') {
            return 'active-link';
        }

        return '';
    };
    

    return (
        <div className='navbar' id='navbar'>
            <div className="logo-card">
                <img src="https://shilohhospital.com/wp-content/uploads/2024/08/Shiloh-Hospital.png" alt="shiloh hospital" />
            </div>
            <ul className={`navbar-menu ${isClicked ? 'clicked' : ''}`}>
                <Link to='/' className={isActive('/')} onClick={closeMenu}>Home</Link>
                <Link to='/about-us' className={isActive('/about-us')} onClick={closeMenu}>About Us</Link>
                <Link to='/services' className={isActive('/services')} onClick={closeMenu}>Services</Link>
                <Link to='/fundraising' className={isActive('/fundraising')} onClick={closeMenu}>Fundraising</Link>
                <Link to='/blog' className={isActive('/blog')} onClick={closeMenu}>Blog</Link>
                <Link to='/appointment' className={isActive('/appointment')} onClick={closeMenu}>Appointment</Link>
                <Link to='/contact-us' className={isActive('/contact-us')} onClick={closeMenu}>Contact Us</Link>
            </ul>
            <div className="navbar-right">
                <button>sign in</button>

                <div className={`menu-btn ${isClicked ? 'clicked' : ''}`}
                    onClick={handleClick}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            {/* Dark overlay */}
            <div className={`overlay ${isClicked ? 'show' : ''}`} onClick={handleClick}></div>
        </div>
    )
}

export default Navbar;
