import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

import search from '../../assets/icons/search.png';
import cart from '../../assets/icons/cart.png';
import profile from '../../assets/icons/profile.png';
import menhew from '../../assets/icons/menhew.png';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <section className='left'>
        <img src={menhew} alt=''></img>
        <span>Menhew</span>
      </section>
      <section className='middle'>
        <Link className='link' to='/categories'>Discover</Link>
        <Link className='link' to='/about'>Brand</Link>
      </section>
      <section className='right'>
        <div className="actions">
          <div className="searchbar">
            <img src={search} alt=''></img>
          </div>
          <div className="cart">
            <img src={cart} alt=''></img>
          </div>
          <div className="profile">
            <img src={profile} alt=''></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar