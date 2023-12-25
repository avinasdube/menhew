import React from 'react';
import './Toast.scss';

const Toast = ({ errorMessage}) => {

    return errorMessage && (
        <div className="toastContainer">
            {errorMessage} !
        </div>
    )
}

export default Toast;