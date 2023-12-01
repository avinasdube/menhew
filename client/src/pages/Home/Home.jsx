import React from 'react';
import './Home.scss';

import p1 from '../../assets/images/p2.jpg';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="welcomeBox">
        <div className="welcomeContent">
          <header>A gentlemen is never off-fashion.</header>
          <main>Step into Style, Stride with confidence.</main>
        </div>
      </div>
      <div className='featuredBox'>
        <div className="left">
          <header>Effortless Style, Everyday Luxury - Shop Our Essentials.</header>
          <main>
            Step into a world where fashion is not just about what you wear but a celebration
            of who you are. 'menhew' is more than an e-commerce platform; it's a lifestyle destination
            for the modern man. Our collections are meticulously curated to inspire and empower you,
            ensuring that every piece embodies the spirit of individuality.  <br></br><br></br>
            From timeless classics to cutting-edge designs, our collections are a symphony of style,
            curated to complement the diverse tastes and personalities of our discerning clientele.
            Our commitment to quality, innovation, and authenticity defines the 'menhew' experience,
            inviting you to make a statement with every ensemble. Join us on a journey of self-expression,
            where fashion is a language spoken fluently.
          </main>
        </div>
        <div className='right'>
          <img src={p1} alt=''></img>
        </div>
      </div>
      <div className="contactBox">
        
      </div>
    </div>
  )
}

export default Home