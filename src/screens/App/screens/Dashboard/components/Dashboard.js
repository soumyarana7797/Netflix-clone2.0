import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Dashboard.css"
import Banner from './Banner';
import Navbar from './Navbar';
import Content from './Content';
import Row from './Row';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    // <>
    <div className="container">
      {/* Nav */}
      <Navbar />

      {/* Banner */}
      <Banner />


      {/* Content */}
      <Content />

      {/* Row */}

      {/* <Row
        title="NETFLIX_ORIGINALS"
        fetchMethod="fetchNetflixOriginals"
        isLargeRow
      /> */}
      {/* <Row title="TRENDING MOVIES" fetchMethod="fetchTrendingMovies" /> */}
    </div>
    // </>
  );
};

export default Home;
