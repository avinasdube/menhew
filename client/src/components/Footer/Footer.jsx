import React from 'react';
import './Footer.scss';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="message">GET STARTED WITH FASHION</div>
        <div className="copyright"><Logo /> <span>2023 &copy; All Rights Reserved</span></div>
    </footer>
  )
}

export default Footer;