import React from 'react';
import './Login.css';
import backgroundImage from '../Assets/jogfalls.jpg';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  const registerURL = '/register';

  const handleGoogleClick = () => {
    // Handle Google login logic
  };

  const handleLinkedInClick = () => {
    // Handle LinkedIn login logic
  };

  return (
    <div className="login-container">
      <div className="image">
        <img src={backgroundImage} alt="Your Image" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#" className="forgot-password">Forgot password?</a>
        <button className="login-button">Login</button> {/* Corrected class name */}
        <div className="signup-prompt">
          Don't have an account? <a href={registerURL} className="blue-link">Sign up</a>
        </div>
        <div className="oauth-icons">
          <p>Or sign in with</p>
          <a href="#" className="google-icon" onClick={handleGoogleClick}>
            <FaGoogle size={24} />
          </a>
          <a href="#" className="linkedin-icon" onClick={handleLinkedInClick}>
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;




