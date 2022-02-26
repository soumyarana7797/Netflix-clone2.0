import React, { useEffect } from 'react';
import _ from 'underscore';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNetflixOriginals,
  fetchTrendingMovies,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanticMovies,
  fetchDocumentaryMovies,
} from 'store/actions';

import './Row.css';

function Row({ title, fetchMethod, isLargeRow = false }) {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const dispatch = useDispatch();

  useEffect(() => {
    switch (fetchMethod) {
      case 'fetchNetflixOriginals':
        dispatch(fetchNetflixOriginals());
        break;
      case 'fetchTrendingMovies':
        dispatch(fetchTrendingMovies());
        break;
      case 'fetchTopRated':
        dispatch(fetchTopRated('CAT_TOP_RATED'));
        break;
      case 'fetchActionMovies':
        dispatch(fetchActionMovies());
        break;
      case 'fetchComedyMovies':
        dispatch(fetchComedyMovies());
        break;
      case 'fetchHorrorMovies':
        dispatch(fetchHorrorMovies());
        break;
      case 'fetchRomanticMovies':
        dispatch(fetchRomanticMovies());
        break;
      case 'fetchDocumentaryMovies':
        dispatch(fetchDocumentaryMovies());
        break;
      default:
        dispatch(fetchTopRated());
    }
  }, [dispatch]);
  const blogList = useSelector((state) => state.blogs.rowMovies, _.isEqual);
  console.log('blogList: ', blogList);
  let bannerMovie;
  // if (fetchMethod === 'fetchNetflixOriginals')
  //   bannerMovie = blogList.netflixOriginals;
  // if (fetchMethod === 'fetchTrendingMovies')
  //   bannerMovie = blogList.trendingMovies;
  // if (fetchMethod === 'fetchTopRated') bannerMovie = blogList.topRatedMovies;

  switch (fetchMethod) {
    case 'fetchNetflixOriginals':
      bannerMovie = blogList.netflixOriginals;
      break;
    case 'fetchTrendingMovies':
      bannerMovie = blogList.trendingMovies;
      break;
    case 'fetchTopRated':
      bannerMovie = blogList.topRatedMovies;
      break;
    case 'fetchActionMovies':
      bannerMovie = blogList.actionMovies;
      break;
    case 'fetchComedyMovies':
      bannerMovie = blogList.comedyMovies;
      break;
    case 'fetchHorrorMovies':
      bannerMovie = blogList.horrorMovies;
      break;
    case 'fetchRomanticMovies':
      bannerMovie = blogList.romanticMovies;
      break;
    case 'fetchDocumentaryMovies':
      bannerMovie = blogList.documentaryMovies;
      break;
    default:
      bannerMovie = blogList.actionMovies;
  }

  // console.log('bannerMovie', bannerMovie);

  let bannerMovieTemplate;

  // if (blogList.results) {
  //   console.log('rowMovies: ', blogList.results);
  //   bannerMovie = blogList.results;
  //   bannerMovieTemplate = bannerMovie.map(
  //     (movie) =>
  //       ((isLargeRow && movie.poster_path) ||
  //         (!isLargeRow && movie.backdrop_path)) && (
  //         <img
  //           className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
  //           key={movie.id}
  //           src={`${IMAGE_BASE_URL}${
  //             isLargeRow ? movie.poster_path : movie.backdrop_path
  //           }`}
  //           alt={movie.name}
  //         />
  //       )
  //   );
  // }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {bannerMovie && bannerMovie.results ? (
          bannerMovie.results.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                  key={movie.id}
                  src={`${IMAGE_BASE_URL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}

export default Row;
