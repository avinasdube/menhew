import React from 'react';
import './BestSelling.scss';

// IMPORTING ASSETS
import flannelShirt from '../../assets/images/casual-shirt/regular_fit_flannel_shirt.jfif';
import twillJogger from '../../assets/images/trousers/regular_fit_twill_joggers3.jfif';

const BestSelling = () => {
    return (
        <div className="bestsellingContainer">
            <div className="bestProduct">
                <div className="content">
                    <div className="top">Trending</div>
                    <div className="middle">REGULAR FIT FLANNEL SHIRT</div>
                    <div className="bottom"></div>
                </div>
                <img src={flannelShirt} alt=''></img>
            </div>
            <div className="bestProduct">
                <div className="content">
                    <div className="top">Trending</div>
                    <div className="middle">REGULAR FIT TWILL JOGGER</div>
                </div>
                <img src={twillJogger} alt=''></img>
            </div>
        </div>
    )
}

export default BestSelling