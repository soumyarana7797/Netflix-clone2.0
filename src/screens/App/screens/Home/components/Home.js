import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
};

export default Home;
