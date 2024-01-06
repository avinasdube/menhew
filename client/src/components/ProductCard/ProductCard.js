import React from 'react';
import './ProductCard.scss';

import heart from '../../assets/icons/favourite.png';
import cart from '../../assets/icons/cart.png';
import { Link } from 'react-router-dom';

import { API_BASE_URL, API_ENDPOINTS } from '../../utils/constants';

const ProductCard = ({ product }) => {
    return (
        <div className="cardContainer">
            <div className="cardImg"
                style={{
                    backgroundImage: `url(${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${product.productId}/${product.images[0]})`
                }}>
                <div className="actionImg">
                    <img src={heart} alt=''></img>
                    <img src={cart} alt=''></img>
                </div>
            </div>
            <div className="cardDetails">
                <span className="pTitle">{product.productName}</span>
                <div className="checkout">
                    <span className="price">{product.productPrice}</span>
                    <Link to={`/products/${product.productCategory}/${product._id}`} className="buynow">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;