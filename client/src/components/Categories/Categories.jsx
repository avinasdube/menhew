import React from 'react';
import './Categories.scss';

import goto from '../../assets/icons/upright.png';

const Categories = () => {
    return (
        <div className="categoriesContainer">
            <section className='heading'>CATEGORIES</section>
            <div className="catOptions">
                <div className="optionRow">
                    <button>T-SHIRTS<img src={goto} alt=''></img></button>
                    <button>JEANS<img src={goto} alt=''></img></button>
                </div>
                <div className="optionRow">
                    <button>FORMALS<img src={goto} alt=''></img></button>
                    <button>CASUALS<img src={goto} alt=''></img></button>
                </div>
                <div className="optionRow">
                    <button>SPORTS WEAR<img src={goto} alt=''></img></button>
                    <button>INNER WEAR<img src={goto} alt=''></img></button>
                </div>
            </div>
        </div>
    )
}

export default Categories;