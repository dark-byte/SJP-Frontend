import React from 'react';
import backgroundImage from '../Assets/jogfalls.jpg';
import { FaGoogle, FaLinkedin } from 'react-icons/fa'; // Import Google and LinkedIn icons from react-icons


const Register = () => {
  const loginURL = '/login';

  const handleGoogleClick = () => {
    // Handle Google login logic
  };

  const handleLinkedInClick = () => {
    // Handle LinkedIn login logic
  };

  return (
    <div className="register-container">
      <div className="image">
        <img src={backgroundImage} alt="Your Image" />
      </div>
      <div className="register-form">
        <h2>Register</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="blue-button">Register</button>
        <div className="login-prompt">
          Already have an account? <a href={loginURL} className="blue-link">Sign in</a>
        </div>
        <div className="oauth-icons">
          <p>Or sign up with</p>
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

export default Register;





