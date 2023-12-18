import React from 'react';
import './Signup.scss';
import Heading from '../../components/Heading/Heading';
import NavButton from '../../components/NavButton/NavButton';

const Signup = () => {
  return (
    <div className="authContainer" data-testid="signup">
      <div className="authBox">
        <Heading>Signup to menhew</Heading>
        <form>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="nameId">Enter your name : </label>
            <input className="inputField" type="text" id="nameId"></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="emailId">Enter your email : </label>
            <input className="inputField" type="email" id="emailId"></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="passId">Enter your password : </label>
            <input className="inputField" type="password" id="passId"></input>
          </div>
          <button className="authButton">Signup</button>
          <div className="already">
            Already signed up ? <NavButton fweight={600} fcolor={'#5C8331'} link={'/login'}>Login</NavButton> now !
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;