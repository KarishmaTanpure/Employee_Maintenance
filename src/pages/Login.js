import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add your authentication logic here
        console.log('Submitted:', { username, password });
    };

    const handleForgotPassword = (event) => {
      event.preventDefault();
        console.log('Forgot password clicked');
    };

    return (
        <div className="container">
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required /><br />

                <div className="forgot-password">
                    <a href="null" onClick={handleForgotPassword}>Forgot password?</a>
                </div>

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
