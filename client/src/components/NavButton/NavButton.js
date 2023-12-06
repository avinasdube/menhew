import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = ({ link, exact, children, navImg, bg, filter }) => {
    return (
        <Link className="linkContainer" to={link} exact={exact} style={{filter: `${filter}`}}>
            <img src={navImg} alt='' style={{ background: `${bg}` }}></img>
            {children}
        </Link>
    )
}

export default NavButton;