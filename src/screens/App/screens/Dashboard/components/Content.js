import React, { useEffect, useState } from 'react';
import './Content.css';

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
    <div className="container1">
      <div className="text">
        <h1>Enjoy on your TV.
        </h1>
        <p>
          Watchx on Smart TVs, Playstation, Xbox,
          Chromecast, Apple TV, Blu-ray players, and
          more.
        </p>
      </div>
      <div className="image">
        <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} />
      </div>
    </div>

  );
};

export default Content;
