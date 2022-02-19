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
  let bannerMovie;

  if (blogList.results) {
    console.log(
      'blogList: ',
      blogList.results[Math.floor(Math.random() * blogList.results.length - 1)]
    );
    bannerMovie =
      blogList.results[Math.floor(Math.random() * blogList.results.length - 1)];
  }

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
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
