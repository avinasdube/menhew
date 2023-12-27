import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children, authentication = true }) => {
  const userDetails = useSelector((state) => state.auth.currentUser);
  // const [authStatus, setAuthStatus] = useState(false);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      // When authentication is needed but authStatus is not true
      if (authentication && !userDetails) {
        navigate('/login');
      } else if (!authentication && userDetails) {
        // When authentication is not needed and the user is already logged in
        navigate('/');
      }

      setLoader(false);
    };

    checkAuthentication();
  }, [userDetails, authentication, navigate]);

  return loader ? <div>Loading...</div> : <>{children}</>;
};

export default Protected;
