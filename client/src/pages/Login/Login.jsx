import React, { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import NavButton from '../../components/NavButton/NavButton';
import { login } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // useState hook to set user input
  const [inputs, setInputs] = useState({
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
      const response = await login(inputs);
      console.log(response);
      navigate('/home');
    } catch (error) {
      console.error("Unexpected Error !", error);
    }
  }

  return (
    <div className="authContainer" data-testid="login">
      <div className="authBox">
        <Heading>Login to menhew</Heading>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="emailId">Enter your email : </label>
            <input className="inputField" type="email" name="email" id="emailId" onChange={handleChange} key="email" required></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="passId">Enter your password : </label>
            <input className="inputField" type="password" name="password" id="passId" onChange={handleChange} key="password" required></input>
          </div>
          <button type="submit" className="authButton">Login</button>
          <div className="already">
            Not signed up ? <NavButton fweight={600} fcolor={'#5C8331'} link={'/signup'}>Signup</NavButton> now !
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login