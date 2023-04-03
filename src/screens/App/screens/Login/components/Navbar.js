import React, { useEffect, useState } from 'react';
import './Login.css';
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
    <>
      <div className="bckimg">
        <img src="https://i.ibb.co/vXqDmnh/background.jpg" alt="" />
      </div>
      <div className="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
      </div>
    </>
  );
};

export default Navbar;
