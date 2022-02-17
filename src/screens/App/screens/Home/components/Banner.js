import React from 'react';
import './Banner.css';

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This a test description This a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test descriptionThis a test
          descriptionThis a test descriptionThis a test description`,
            150
          )}
        </h1>
      </div>
      <dev className="banner_fadeBottom"></dev>
    </header>
  );
}

export default Banner;
