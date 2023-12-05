import React from 'react';
import './Welcome.scss';

import welcomeImg from '../../assets/images/p2.jpg';
import gotoIcon from '../../assets/icons/upright.png';

const Welcome = () => {
    return (
        <div className="flex-container welcomeContainer">
            <div className="flex-container welcomeContainer__leftSide">
                <div className="flex-container welcomeContainer__leftSide__leftTop">
                    <div className="flex-container welcomeContainer__leftSide__leftTop__mottoCard">
                        A Gentleman is never off-fashion.
                        <img src={gotoIcon} alt='' />
                    </div>
                </div>
                <div className="flex-container welcomeContainer__leftSide__leftBottom">
                    <div className="flex-container welcomeContainer__leftSide__leftBottom__adCard">
                        <div className="flex-container welcomeContainer__leftSide__leftBottom__adCard__ad">
                            <div className="flex-container welcomeContainer__leftSide__leftBottom__adCard__ad__heading">Huge collection of outfits.</div>
                            <div className="flex-container welcomeContainer__leftSide__leftBottom__adCard__ad__content">
                                Curated just for you !
                                <button>Explore now.<img src={gotoIcon} alt='' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-container welcomeContainer__rightSide">
                <img src={welcomeImg} alt='' />
            </div>
        </div>
    );
};

export default Welcome;
