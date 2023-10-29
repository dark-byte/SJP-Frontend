import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        <h3>S.J.P.</h3>
      </div>
      <div className="nav-navigation">
        <a href="/" className="nav-links">Home</a>
        <a href="/" className="nav-links">Find Jobs</a>
        <a href="/" className="nav-links">Companies</a>
      </div>
        <div className="nav-register">
            <button className="login btn secondary-btn">
                Login
            </button>
            <button className="register btn primary-btn">
                Register
            </button>
        </div>
    </div>
  )
}

export default Nav
