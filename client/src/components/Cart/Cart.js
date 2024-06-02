import React from 'react';
import './Cart.scss';

import { useDispatch, useSelector } from 'react-redux';
import { API_BASE_URL, API_ENDPOINTS } from '../../utils/constants';
import { removeItem } from '../../reducers/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();

    const cartProducts = useSelector(state => state.cart.products)

    // function to calculate total price of products available in cart

    const totalPrice = () => {
        let total = 0;
        cartProducts.forEach((item) => (total += item.productQuantity * item.productPrice));
        return total.toFixed(2)
    }

    return (
        <div className="cartContainer">
            <div className="cartProductsBox">
                {cartProducts.length === 0 ?
                    <div className="noproducts">No products to show</div> :
                    cartProducts.map((cartProduct) => (
                        <div className="cartProduct" key={cartProduct.id}>
                            <div className="cpImage">
                                <img src={`${API_BASE_URL}${API_ENDPOINTS.fetchImages}/${cartProduct.productId}/${cartProduct.productImage}`} alt=''></img>
                            </div>
                            <div className="cpDetails">
                                <div className="cpTitle">{cartProduct.title}</div>
                                <div className="cpCountSize">
                                    <span className="cpPrice">{cartProduct.productQuantity} * &#8377; {cartProduct.productPrice}</span>
                                    <span className="cpSize">{cartProduct.productSize}</span>
                                </div>
                                <button className="cpBtn" onClick={()=>dispatch(removeItem(cartProduct.id))}>Remove</button>
                            </div>
                        </div>))}
            </div>

            {cartProducts.length === 0 ? '' : <div className="totalSection">
                <div className="totalSectionBox">
                    <div className="totalPrice">&#8377; {totalPrice()} TOTAL</div>
                    <button className="cpBtn">Checkout</button>
                </div>
            </div>}
        </div>
    )
}

export default Cart;