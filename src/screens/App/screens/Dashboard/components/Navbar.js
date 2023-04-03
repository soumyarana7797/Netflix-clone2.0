import React, { useEffect, useState } from 'react';
import './Navbar.css';
// import defaultImage from 'assets/images/netflix-logo.jpg';
// import { require } from 'browserify'


const Navbar = () => {
  const [show, handleShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <nav className="navbar">
        <div className="left">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        </div>
        <div className="right">
          <select name="language" className="language">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <button><a href="#">Sign In</a></button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
