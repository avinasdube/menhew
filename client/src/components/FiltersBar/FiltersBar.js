import React, { useState } from 'react';
import './FiltersBar.scss';

import ficon from '../../assets/icons/filters.png';

const FiltersBar = () => {

    const [dropdown, setDropDown] = useState(false);

    const handleDropdown = () => {
        dropdown === false ? setDropDown(true) : setDropDown(false);
    }
    return (
        <div className="filtersContainer">
            <div className="filtersBox">
                <div className="sortingFilter">
                    <div className="activeSortFilter" onClick={handleDropdown}><img src={ficon} alt=''></img>Price: Low to High</div>
                    <div className={`sortFilterOptions ${dropdown === true ? 'active' : ''}`}>
                        <span>Price: High to Low</span>
                        <span>Price: High to Low</span>
                        <span>Price: High to Low</span>
                        <span>Price: High to Low</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltersBar;