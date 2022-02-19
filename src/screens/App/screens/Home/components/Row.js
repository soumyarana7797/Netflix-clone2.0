import React, { useEffect } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals } from 'store/actions';

import './Row.css';

function Row({ title, fetchMethod, isLargeRow = false }) {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogs.rowMovies, _.isEqual);
  useEffect(() => {
    switch (fetchMethod) {
      case 'fetchNetflixOriginals':
        dispatch(fetchNetflixOriginals());
        break;
      default:
        dispatch(fetchNetflixOriginals());
    }
  }, [dispatch]);

  let bannerMovie;
  let bannerMovieTemplate;

  if (blogList.results) {
    console.log('rowMovies: ', blogList.results);
    bannerMovie = blogList.results;
    bannerMovieTemplate = bannerMovie.map((movie) => (
      <img
        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
        key={movie.id}
        src={`${IMAGE_BASE_URL}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
    ));
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {bannerMovieTemplate && bannerMovieTemplate}
      </div>
    </div>
  );
}

export default Row;
