import React, { useState } from 'react';
import './Signup.scss';
import Heading from '../../components/Heading/Heading';
import NavButton from '../../components/NavButton/NavButton';
import { signin } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';

const Signup = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  // useState hook to set user input
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  // function to handle change in input value
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin(inputs);
      console.log(response);
      navigate('/login');
    } catch (err) {
      setErrorMessage(err?.response?.data?.error);
      setTimeout(()=>{
        setErrorMessage(null);
      },3000)
    }
  }

  return (
    <div className="authContainer" data-testid="signup">
    <Toast errorMessage={errorMessage}/>
      <div className="authBox">
        <Heading>Signup to menhew</Heading>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="nameId">Enter your name : </label>
            <input className="inputField" type="text" id="nameId" name="fullname" onChange={handleChange} required></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="emailId">Enter your email : </label>
            <input className="inputField" type="email" id="emailId" name="email" onChange={handleChange} required></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="passId">Enter your password : </label>
            <input className="inputField" type="password" id="passId" name="password" onChange={handleChange} required></input>
          </div>
          <button type="submit" className="authButton">Signup</button>
          <div className="already">
            Already signed up ? <NavButton fweight={600} fcolor={'#5C8331'} link={'/login'}>Login</NavButton> now !
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;