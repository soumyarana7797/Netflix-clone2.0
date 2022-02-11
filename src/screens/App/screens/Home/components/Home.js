import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';

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

        {/* Row */}
      </div>
    </>
  );
};

export default Home;
