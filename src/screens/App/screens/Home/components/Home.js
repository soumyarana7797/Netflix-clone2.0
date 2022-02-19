import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <div className="homeScreen">
        {/* Nav */}
        <Navbar />

        {/* Banner */}
        <Banner />

        {/* Row */}

        <Row
          title="NETFLIX_ORIGINALS"
          fetchMethod="fetchNetflixOriginals"
          isLargeRow
        />
      </div>
    </>
  );
};

export default Home;
