import React from 'react';
import './CatBox.scss';

const CatBox = ({ catOptions }) => {
    return (
        <>
            {catOptions.map((catOption) => (
                <div className="catBox" style={{ backgroundImage: `url(${catOption.bgImg})` }} key={catOption.id}>
                    <span className="catTitle">{catOption.title}</span>
                </div>))}
        </>
    )
}

export default CatBox;