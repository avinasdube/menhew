import React from 'react';
import './Heading.scss';

const Heading = ({ children }) => {
    return (
        <div className="heading">
            {children}
        </div>
    )
}

export default Heading;