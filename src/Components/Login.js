import React from 'react';
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
    <div className="login-page">
      <div className="login-left">
        <img src={backgroundImage} alt="" />
      </div>
      
      <div className="login-right">
      <svg className='login-left-svg' width="100%" height="100%">

   <pattern id="pattern-hex" x="0" y="0" width="112" height="190" patternUnits="userSpaceOnUse" viewBox="56 -254 112 190">
     <g id="hexagon">
       <path d="M168-127.1c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-0.3 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5C167-127,167.5-127.1,168-127.1 L168-127.1z"></path>
       <path d="M112-222.5c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2l-53.4,30.5 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C111-222.4,111.5-222.5,112-222.5L112-222.5z"></path>
       <path d="M168-317.8c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-191 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C167-317.7,167.5-317.8,168-317.8L168-317.8z"></path>
     </g>
 
 </pattern>
 <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-hex)"></rect>
</svg>
        <div className="login-form-container">
          <form className='login-form'>
            <h2>Welcome Back!</h2>
            <input type="text" name="" id="" placeholder='Enter your email'/>
            <input type="password" name="" id="" placeholder='Enter your password'/>
            <a href="/">Forgot Password?</a>
            <button className='login-btn btn primary-btn'>Login</button>
            <p>Don't have an account? <a href="/">Signup</a></p>
            <div className="hr-div">
              <hr /><p>or</p><hr />
            </div>
            <div className="social-logins">
              <button className='social-signin-btn google-btn btn'><FaGoogle className='social-login-icon'/> Login With Google</button>
              <button className='social-signin-btn linkedin-btn btn primary-btn'><FaLinkedin className='social-login-icon'/> Login With LinkedIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;




