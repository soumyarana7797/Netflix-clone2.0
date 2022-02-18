import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import './Banner.css';
import { fetchBlogs } from 'store/actions';

const Banner = () => {
  // API call
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogs.blogData, _.isEqual);
  // const [blogData, setBlogData] = useState(blogList);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // useEffect(() => {
  //   setBlogData(blogList);
  // }, [blogList]);

  console.log('blogList: ', blogList);

  // console.log('blogList: ', blogData);
  // For truncating string
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
          {blogList && (
            // blogList.results.map((blog) => {
            //   <p>blog.original_title</p>;
            // })
            <p>{blogList.total_results}</p>
          )}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
