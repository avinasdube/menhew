import React, { useState } from 'react';
import './Navbar.scss';

// IMPORTING ICONS
import search from '../../assets/icons/search.png';
import categories from '../../assets/icons/categories.png';
import cart from '../../assets/icons/cart.png';
import profile from '../../assets/icons/profile.png';

// IMPORTING COMPONENTS
import NavButton from '../NavButton/NavButton';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import ProfileBox from '../ProfileBox/ProfileBox';
import { useSelector } from 'react-redux';

const Navbar = ({ filter }) => {

  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleCart = () => {
    cartOpen === false ? setCartOpen(true) : setCartOpen(false);
  }

  const handleProfile = () => {
    profileOpen === false ? setProfileOpen(true) : setProfileOpen(false);
  }

  return (
    <nav className="navbarContainer">
      <section className="nav-left">
        <Logo filter={filter} />
      </section>
      <section className="nav-right">
        <button className="linkContainer"><img src={search} alt=''></img></button>
        <NavButton link={"/categories"} navImg={categories} filter={filter} />
        <button className="linkContainer" onClick={handleCart}><img src={cart} alt=''></img></button>
        <div className={`cartBox ${cartOpen === true ? 'active' : ''}`}><Cart /></div>
        {currentUser ? <button className="linkContainer" onClick={handleProfile}><img src={profile} alt=''></img></button> : ''}
        {currentUser ? <div className={`profileBox ${profileOpen === true ? 'active' : ''}`}><ProfileBox /></div> : ''}
      </section>
    </nav>
  )
}

export default Navbar;