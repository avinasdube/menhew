import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const Protected = ({ children, authentication = true }) => {
  const userDetails = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      // When authentication is needed but userDetails are not available
      if (authentication && !userDetails) {
        navigate('/login');
      } else if (!authentication && userDetails) {
        // When authentication is not needed and the user is already logged in
        navigate('/');
      }
      setLoader(false)
    };
    checkAuthentication();
  }, [userDetails, authentication, navigate]);

  return loader ? <Loading /> : <>{children}</>;
};

export default Protected;
