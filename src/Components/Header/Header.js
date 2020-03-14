import React from 'react';
import logo from '../Logo/logo192.png';
import './Header.css';


const Header = () => {

    return (
        <div className="logo">
        <div>
            <img src={logo} alt=""/>
        </div>
        </div>
        
    );
};

export default Header;