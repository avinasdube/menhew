import React from 'react';
import './ProductCard.scss';

import heart from '../../assets/icons/favourite.png';
import cart from '../../assets/icons/cart.png';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="cardContainer">
            <div className="cardImg" style={{ backgroundImage: `url(${product.pImg})` }}>
                <div className="actionImg">
                    <img src={heart} alt=''></img>
                    <img src={cart} alt=''></img>
                </div>
            </div>
            <div className="cardDetails">
                <span className="pTitle">{product.title}</span>
                <div className="checkout">
                    <span className="price">{product.price}</span>
                    <Link to={`/products/${product.cat}/${product.title}`} className="buynow">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;