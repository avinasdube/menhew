import React from 'react';
import './BestSelling.scss';

// IMPORTING ASSETS
import checkWhite from '../../assets/images/casual-shirt/wc1.jfif';
import redPrint from '../../assets/images/casual-shirt/rs2.jfif';

const BestSelling = () => {
    return (
        <div className="bestsellingContainer">
            <div className="bestProduct">
                <div className="content">
                    <div className="top">Trending</div>
                    <div className="middle">RELAXED FIT FLANNEL SHIRT</div>
                    <div className="bottom"></div>
                </div>
                <img src={checkWhite} alt=''></img>
            </div>
            <div className="bestProduct">
                <div className="content">
                    <div className="top">Trending</div>
                    <div className="middle">PURE COTTON RED PRINTED SHIRT</div>
                </div>
                <img src={redPrint} alt=''></img>
            </div>
        </div>
    )
}

export default BestSelling