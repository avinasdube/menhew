import React from 'react';
import './CatBox.scss';

import {Link} from 'react-router-dom';

const CatBox = ({ catOptions }) => {
    return (
        <>
            {catOptions.map((catOption) => (
                <div className="catBox" style={{ backgroundImage: `url(${catOption.bgImg})` }} key={catOption.id}>
                    {/* redirecting to product list page */}
                    <Link to={`/products/${catOption.title.toLocaleLowerCase()}`} className="catTitle">{catOption.title}</Link>
                </div>))}
        </>
    )
}

export default CatBox;