import React from 'react';
import './BestSelling.scss';

// IMPORTING ASSETS
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';

const BestSelling = () => {
    return (
        <div className="bestsellingContainer">
            <div className="bestProduct">
                <div className="content">
                    <div className="top">Trending</div>
                    <div className="middle">GANGSTA STYLE CHECK SHIRT</div>
                    <div className="bottom"></div>
                </div>
                <img src={p1} alt=''></img>
            </div>
            <div className="bestProduct">
                <div className="content">
                    <div className="top">Trending</div>
                    <div className="middle">ELITE CLASS LUXURY WHITE SHIRT</div>
                </div>
                <img src={p2} alt=''></img>
            </div>
        </div>
    )
}

export default BestSelling