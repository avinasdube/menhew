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

const Navbar = ({ filter }) => {

  const [cartOpen, setCartOpen] = useState(false);

  const handleClick = () => {
    cartOpen === false ? setCartOpen(true) : setCartOpen(false);
  }

  return (
    <nav className="navbarContainer">
      <section className="nav-left">
        <Logo filter={filter} />
      </section>
      <section className="nav-right">
        <button className="linkContainer"><img src={search} alt=''></img></button>
        <NavButton link={"/categories"} navImg={categories} filter={filter} onClick={handleClick} />
        <button className="linkContainer" onClick={handleClick}><img src={cart} alt=''></img></button>
        <div className={`cartBox ${cartOpen === true ? 'active' : ''}`}><Cart /></div>
        <button className="linkContainer"><img src={profile} alt=''></img></button>
      </section>
    </nav>
  )
}

export default Navbar;