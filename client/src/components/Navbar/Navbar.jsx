import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

import search from '../../assets/icons/search.png';
import categories from '../../assets/icons/categories.png';
import cart from '../../assets/icons/cart.png';
import profile from '../../assets/icons/profile.png';
import menhew from '../../assets/icons/menhew.png';

const Navbar = () => {
  return (
    <div className='navbarContainer' data-testid="navbar">
      <section className='left'>
        <img src={menhew} alt=''></img>
        <Link className='link' to='/'>Menhew</Link>
      </section>
      <section className='right'>
        <div className="actions">
          <div className="searchbar">
            <img src={search} alt='search'></img>
          </div>
          <div className="categories">
            <Link to='/categories'><img src={categories} alt='search'></img></Link>
          </div>
          <div className="cart">
            <Link><img src={cart} alt='cart'></img></Link>
          </div>
          <div className="profile">
            <Link><img src={profile} alt='profile'></img></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar;