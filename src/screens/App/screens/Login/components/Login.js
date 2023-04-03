import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Login.css"
import Banner from './Banner';
import Navbar from './Navbar';
import Content from './Content';

const Login = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    // <>
    <header class="showcase">
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
    </header>
    // </>
  );
};

export default Login;
