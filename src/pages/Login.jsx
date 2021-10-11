import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"></img>
    
          <form action="/" className="form">
            <label for="email" className="label">Email address</label>
            <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email"></input>
    
            <label for="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password"></input>
    
            <input type="submit" value="Log in" className="primary-button login-button"></input>
            <a href="/">Forgot my password</a>
          </form>
    
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    )
}

export default Login;
