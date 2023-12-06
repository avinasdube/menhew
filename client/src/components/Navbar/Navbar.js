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

const Navbar = ( {filter}) => {

  const navLinks = [
    { id: 1, navImg: search, redirect: "" },
    { id: 2, navImg: categories, redirect: "/categories" },
    { id: 3, navImg: cart, redirect: "" },
    { id: 4, navImg: profile, redirect: "" }
  ];

  return (
    <nav className="navbarContainer">
      <section className="nav-left">
        <Logo filter={filter}/>
      </section>
      <section className="nav-right">
        {navLinks.map((navLink) => (
          <NavButton link={navLink.redirect} navImg={navLink.navImg} key={navLink.id} filter={filter} />
        ))}
      </section>
    </nav>
  )
}

export default Navbar;