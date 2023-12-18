import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = ({ link, children, navImg, fweight, fcolor }) => {
    return (
        <Link
            className="linkContainer"
            to={link}
            style={{fontWeight: `${fweight}`, color: `${fcolor}`}}>
            {navImg ?
                <img src={navImg} alt=''></img> : ''}
            {children}
        </Link>
    )
}

export default NavButton;