import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = ({ link, children, navImg,  }) => {
    return (
        <Link
            className="linkContainer"
            to={link}>
            {navImg ?
                <img src={navImg} alt=''></img> : ''}
            {children}
        </Link>
    )
}

export default NavButton;