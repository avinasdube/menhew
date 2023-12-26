import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children, authentication = true }) => {

    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        // when authentication is needed but authStatus is not true
        if (authentication && authStatus !== authentication) {
            navigate('/login');
        } else if (!authentication && authStatus !== authentication) { // when authentication is not needed and you are already logged in
            navigate("/")
        }

        setLoader(false);
    }, [authStatus, authentication, navigate])

    return loader ?
        <div>loading</div> :
        <>{children}</>

}

export default Protected;