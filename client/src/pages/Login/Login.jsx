import React from 'react';
import Heading from '../../components/Heading/Heading';
import NavButton from '../../components/NavButton/NavButton';

const Login = () => {
  return (
    <div className="authContainer" data-testid="login">
      <div className="authBox">
        <Heading>Login to menhew</Heading>
        <form>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="emailId">Enter your email : </label>
            <input className="inputField" type="email" id="emailId"></input>
          </div>
          <div className="inputBox">
            <label className="inputLabel" htmlFor="passId">Enter your password : </label>
            <input className="inputField" type="password" id="passId"></input>
          </div>
          <button className="authButton">Login</button>
          <div className="already">
            Not signed up ? <NavButton fweight={600} fcolor={'#5C8331'} link={'/signup'}>Signup</NavButton> now !
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login