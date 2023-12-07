import React from 'react';
import './Welcome.scss';

import { Link } from 'react-router-dom';
import upright from '../../assets/icons/upright.png';

const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <header className="header">A gentleman is never off-fashion</header>
      <section className="subheader">Huge collection of outfits, curated just for you.</section>
      <div className="redirect">
        <Link to="/categories" className='link'><img src={upright} alt=''></img></Link>
      </div>
    </div>
  )
}

export default Welcome;