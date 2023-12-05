import React from 'react';
import './BestSelling.scss';

import shirt from '../../assets/images/p1.jpg';

const BestSelling = () => {
    return (
        <div className="flex-container mainContainer">
            <div className="flex-container mainContainer__subContainer">
                <div className="flex-container mainContainer__subContainer__heading">BEST SELLING PRODUCTS</div>
                <div className="flex-container mainContainer__subContainer__productsList">
                    <div className="flex-container mainContainer__subContainer__productsList__singleProduct">
                        <img src={shirt} alt='' className="flex-container mainContainer__subContainer__productsList__singleProduct__image" />
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__productDetails">
                            <span className='name'>Casual Pure Cotton Shirt</span>
                            <span className='descrip'>Made in Bharat</span>
                        </div>
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__priceDetails">
                            <span>Rs. 699</span>
                            <span>4.5 Rating</span>
                        </div>
                    </div>
                    <div className="flex-container mainContainer__subContainer__productsList__singleProduct">
                        <img src={shirt} alt='' className="flex-container mainContainer__subContainer__productsList__singleProduct__image" />
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__productDetails">
                            <span className='name'>Casual Pure Cotton Shirt</span>
                            <span className='descrip'>Made in Bharat</span>
                        </div>
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__priceDetails">
                            <span>Rs. 699</span>
                            <span>4.5 Rating</span>
                        </div>
                    </div>
                    <div className="flex-container mainContainer__subContainer__productsList__singleProduct">
                        <img src={shirt} alt='' className="flex-container mainContainer__subContainer__productsList__singleProduct__image" />
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__productDetails">
                            <span className='name'>Casual Pure Cotton Shirt</span>
                            <span className='descrip'>Made in Bharat</span>
                        </div>
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__priceDetails">
                            <span>Rs. 699</span>
                            <span>4.5 Rating</span>
                        </div>
                    </div>
                    <div className="flex-container mainContainer__subContainer__productsList__singleProduct">
                        <img src={shirt} alt='' className="flex-container mainContainer__subContainer__productsList__singleProduct__image" />
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__productDetails">
                            <span className='name'>Casual Pure Cotton Shirt</span>
                            <span className='descrip'>Made in Bharat</span>
                        </div>
                        <div className="flex-container mainContainer__subContainer__productsList__singleProduct__priceDetails">
                            <span>Rs. 699</span>
                            <span>4.5 Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling;
