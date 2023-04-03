import React, { useEffect, useState } from 'react';
import './Login.css';

const Content = () => {
  const [show, handleShow] = useState(false)

  // const transitionNavBar = () => {
  //   if (window.scrollY > 100) {
  //     handleShow(true)
  //   } else {
  //     handleShow(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", transitionNavBar)
  //   return () => window.removeEventListener("scroll", transitionNavBar)
  // }, [])

  return (
    <footer>
      <div className="ftr-content">
        <div className="content">
          <a href="#"> Questions? Contact us.</a>

        </div>
        <div className="ftr">
          <a href="#">Gift Card Terms</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Statement</a>

        </div>
        <div className="select">
          <select name="" id="">
            <option value=""> English</option>
            <option value=""> العربية</option>
            <option value=""> Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Content;
