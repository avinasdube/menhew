import React, { useState } from 'react';
import './Signup.scss';
import Heading from '../../components/Heading/Heading';
import NavButton from '../../components/NavButton/NavButton';
import { signUp } from '../../api/api';

const Signup = () => {

  const [uttar, setUttar] = useState();

  // useState hook to set user input
  const [inputs, setInputs] = useState({
    name: "",
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
    // try {
    //   const { response } = await signUp(inputs)
    //   setUttar(response);
    //   console.log(uttar);

    // } catch (error) {
    //   console.error("Unexpected Error !", error);
    // }

    const { loading, error, status, promise } = signUp(inputs);

    // Check loading state
    if (loading) {
      console.log('Loading...');
      return;
    }

    // Check for errors
    if (error) {
      console.error('Error:', error);
      console.log('Status:', status);
      return;
    }

    // If successful, you can access the response data
    promise.then(({ response }) => {
      console.log('Response:', response);
    });
  }

  return (
    <div className="authContainer" data-testid="signup">
      <div className="authBox">
        <Heading>Signup to menhew</Heading>
        <form>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="nameId">Enter your name : </label>
            <input className="inputField" type="text" id="nameId" name="name" onChange={handleChange}></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="emailId">Enter your email : </label>
            <input className="inputField" type="email" id="emailId" name="email" onChange={handleChange}></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="passId">Enter your password : </label>
            <input className="inputField" type="password" id="passId" name="password" onChange={handleChange}></input>
          </div>
          <button className="authButton" onClick={handleSubmit}>Signup</button>
          <div className="already">
            Already signed up ? <NavButton fweight={600} fcolor={'#5C8331'} link={'/login'}>Login</NavButton> now !
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;