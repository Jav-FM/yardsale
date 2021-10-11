import React from 'react';
import '../styles/CreatePassword.scss';

const CreatePassword = () => {
    return (
        <div className="CreatePassword">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"></img>
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for your account</p>
                <form action="/" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"></input>
            
                    <label for="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"></input>
            
                    <input type="submit" value="Confirm" className="primary-button login-button"></input>
                </form>
            </div>
        </div>
    );
}

export default CreatePassword;
