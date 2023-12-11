import React from 'react';
import './Cart.scss';

import himalayaTshirt from '../../assets/images/tshirts/loose_fit_himalaya_tshirt.jfif';
import corduroyShirt from '../../assets/images/casual-shirt/regular_fit_carduroy_shirt4.jfif';

const Cart = () => {

    const cartProducts = [
        {
            id: 1,
            pImg: himalayaTshirt,
            title: "Himalaya T-Shirt",
            price: "Rs. 699",
            cat: "tshirts",
        },
        {
            id: 2,
            pImg: corduroyShirt,
            title: "Corduroy Shirt",
            price: "Rs. 1099",
            cat: "shirts"
        },
        {
            id: 3,
            pImg: himalayaTshirt,
            title: "Himalaya T-Shirt",
            price: "Rs. 699",
            cat: "tshirts",
        },
        {
            id: 4,
            pImg: corduroyShirt,
            title: "Corduroy Shirt",
            price: "Rs. 1099",
            cat: "shirts"
        },
        {
            id: 5,
            pImg: himalayaTshirt,
            title: "Himalaya T-Shirt",
            price: "Rs. 699",
            cat: "tshirts",
        },
    ]

    return (
        <div className="cartContainer">
            <div className="cartProductsBox">
                {cartProducts.length === 0 ?
                    <div className="noproducts">No products to show</div> :
                    cartProducts.map((cartProduct) => (
                        <div className="cartProduct" key={cartProduct.id}>
                            <div className="cpImage">
                                <img src={cartProduct.pImg} alt=''></img>
                            </div>
                            <div className="cpDetails">
                                <div className="cpTitle">{cartProduct.title}</div>
                                <div className="cpCountSize">
                                    <span className="cpPrice">2 * &#8377; 899</span>
                                    <span className="cpSize">M</span>
                                </div>
                                <button className="cpBtn">Remove</button>
                            </div>
                        </div>))}
            </div>

            {cartProducts.length === 0 ? '' : <div className="totalSection">
                <div className="totalSectionBox">
                    <div className="totalPrice">&#8377; 2697 TOTAL</div>
                    <button className="cpBtn">Checkout</button>
                </div>
            </div>}
        </div>
    )
}

export default Cart;