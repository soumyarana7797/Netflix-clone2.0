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
    <div className="title">
      <div className="content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <form action="#">
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="email">
            <input type="email" name="email" placeholder="Email address" />
            <button><a href="#">Get Started ></a></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
