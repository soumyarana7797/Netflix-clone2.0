import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
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
    <div className="showcase-content">
      <div className="form">
        <form action="">
          <h1>Sign In</h1>
          <div className="info">
            <input type="email" name="email" className="email" placeholder="Email or phone number" id="" /> <br />
            <input type="password" name="password" className="password" placeholder="Password" id="" />
          </div>
          <div className="btn">
            <button type="submit" className="btn-primary">Sign In</button>
          </div>
          <div className="help">
            <div>
              <input type="checkbox" value="true" />
              <label for=""> Remember me</label>
            </div>
            <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>

          </div>
        </form>
      </div>

      <div className="fcbk">
        <a href="https://facebook.com">
          <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
        </a>
        <p>Login with Facebook</p>
      </div>
      <div className="signup">
        <p>New to Netflix ?</p>
        <a href="https://www.netflix.com/dz-en/">Sign up now</a>
      </div>
      <div className="more">
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
