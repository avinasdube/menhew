import React from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';

const Header = ({ children, bgImg }) => {
    return (
        <header className="header" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}>
            <Navbar />
            <div className="childContainer">
                {children}
            </div>
        </header>
    )
}

export default Header;