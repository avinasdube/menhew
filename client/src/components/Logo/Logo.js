import React from 'react';
import './Logo.scss';

import menhew from '../../assets/icons/menhew.png';
import NavButton from '../NavButton/NavButton';

const Logo = ({filter}) => {
    return (
        <div className="logoContainer">
            <NavButton link={'/'} navImg={menhew} bg={'none'} filter={filter}>Menhew</NavButton>
        </div>
    )
}

export default Logo