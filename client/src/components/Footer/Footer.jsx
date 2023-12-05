import React from 'react';
import './Footer.scss';

import {Link} from 'react-router-dom';
import menhew from '../../assets/icons/menhew.png';

const Footer = () => {
  return (
    <div className='footerContainer' data-testid="footer">
      <div className="footerBox">
        <div className="footerTop">
          <div className="topLeft">
            <div className='menhewLogo'>
              <Link className='link' to='/'>
                <img src={menhew} alt='loading'></img>
                <span>Menhew</span>
              </Link>
            </div>
          </div>
          <div className="topRight">
            We at Menhew, believe in showcasing and delivering best quality products to our customers.
            Product quality, instant delivery and 24*7 customer support is our utmost priority. Thanks. Visit us again !
          </div>
        </div>
        <div className="footerBottom">
          <div className="navLinks">
            <Link className='link'>Home</Link>
            <Link className='link'>FAQ</Link>
            <Link className='link'>Contact Us</Link>
          </div>
          <hr></hr>
          <div className="copyrightDetails">
            <div className="cdLeft">
              &copy; Menhew 2023. All Rights Reserved
            </div>
            <div className="cdRight">
              <Link className='link'>Privacy Policy</Link>
              <Link className='link'>Shipping Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer