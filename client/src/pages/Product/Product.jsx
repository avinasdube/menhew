import React, { useState } from 'react';
import './Product.scss';
import Navbar from '../../components/Navbar/Navbar';

import himalayaTshirt from '../../assets/images/tshirts/loose_fit_himalaya_tshirt.jfif';
import himalayaTshirt2 from '../../assets/images/tshirts/loose_fit_himalaya_tshirt2.jfif';
import himalayaTshirt3 from '../../assets/images/tshirts/loose_fit_himalaya_tshirt3.jfif';
import himalayaTshirt4 from '../../assets/images/tshirts/loose_fit_himalaya_tshirt4.jfif';

import fav from '../../assets/icons/favourite.png';
import cart from '../../assets/icons/cart.png';
import Heading from '../../components/Heading/Heading';

const Product = () => {

  const [activeImg, setActiveImg] = useState(himalayaTshirt);

  return (
    <div className="productContainer" data-testid="product">
      <Navbar />
      <main className="pcontMain">
        <div className="pcontLeft">
          <div className="largeImg">
            <img src={activeImg} alt=''></img>
          </div>
          <div className="smallImg">
            <img src={himalayaTshirt} alt='' onClick={() => setActiveImg(himalayaTshirt)}></img>
            <img src={himalayaTshirt2} alt='' onClick={() => setActiveImg(himalayaTshirt2)}></img>
            <img src={himalayaTshirt3} alt='' onClick={() => setActiveImg(himalayaTshirt3)}></img>
            <img src={himalayaTshirt4} alt='' onClick={() => setActiveImg(himalayaTshirt4)}></img>
          </div>
        </div>
        <div className="pcontRight">
          <Heading>Himalaya Printed T-Shirt</Heading>
          <div className="price">&#8377; 899</div>
          <div className="pdescrip">Pure cotton brown printed T-Shirt with Himalaya image</div>
          <div className="psize">
            <div className="psizeHeading">Size</div>
            <div className="sizeButtons">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="pactions">
            <button><img src={fav} alt=''></img></button>
            <button><img src={cart} alt=''></img></button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product