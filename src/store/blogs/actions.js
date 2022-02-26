import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  FETCH_BLOG_DETAILS,
  FETCH_BLOG_DETAILS_SUCCESS,
  FETCH_BLOG_DETAILS_ERROR,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_NETFLIX_ORIGINALS_SUCCESS,
  FETCH_NETFLIX_ORIGINALS_ERROR,
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_ERROR,
  FETCH_TOP_RATED,
  FETCH_TOP_RATED_SUCCESS,
  FETCH_TOP_RATED_ERROR,
  FETCH_ACTION_MOVIES,
  FETCH_ACTION_MOVIES_SUCCESS,
  FETCH_ACTION_MOVIES_ERROR,
  FETCH_COMEDY_MOVIES,
  FETCH_COMEDY_MOVIES_SUCCESS,
  FETCH_COMEDY_MOVIES_ERROR,
  FETCH_HORROR_MOVIES,
  FETCH_HORROR_MOVIES_SUCCESS,
  FETCH_HORROR_MOVIES_ERROR,
  FETCH_ROMANTIC_MOVIES,
  FETCH_ROMANTIC_MOVIES_SUCCESS,
  FETCH_ROMANTIC_MOVIES_ERROR,
  FETCH_DOCUMENTARY_MOVIES,
  FETCH_DOCUMENTARY_MOVIES_SUCCESS,
  FETCH_DOCUMENTARY_MOVIES_ERROR,
} from 'store/actionTypes';

export const fetchBlogs = () => ({
  type: FETCH_BLOGS,
});

export const fetchBlogsSuccess = (data) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: data,
});

export const fetchBlogsError = (message) => ({
  type: FETCH_BLOGS_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_NETFLIX_ORIGINALS

export const fetchNetflixOriginals = () => ({
  type: FETCH_NETFLIX_ORIGINALS,
});

export const fetchNetflixOriginalsSuccess = (data) => ({
  type: FETCH_NETFLIX_ORIGINALS_SUCCESS,
  payload: data,
});

export const fetchNetflixOriginalsError = (message) => ({
  type: FETCH_NETFLIX_ORIGINALS_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_Trending

export const fetchTrendingMovies = () => ({
  type: FETCH_TRENDING_MOVIES,
});

export const fetchTrendingMoviesSuccess = (data) => ({
  type: FETCH_TRENDING_MOVIES_SUCCESS,
  payload: data,
});

export const fetchTrendingMoviesError = (message) => ({
  type: FETCH_TRENDING_MOVIES_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_TOP_RATED

export const fetchTopRated = () => ({
  type: FETCH_TOP_RATED,
});

export const fetchTopRatedSuccess = (data) => ({
  type: FETCH_TOP_RATED_SUCCESS,
  payload: data,
});

export const fetchTopRatedError = (message) => ({
  type: FETCH_TOP_RATED_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_ACTION_MOVIES

export const fetchActionMovies = () => ({
  type: FETCH_ACTION_MOVIES,
});

export const fetchActionMoviesSuccess = (data) => ({
  type: FETCH_ACTION_MOVIES_SUCCESS,
  payload: data,
});

export const fetchActionMoviesError = (message) => ({
  type: FETCH_ACTION_MOVIES_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_COMEDY_MOVIES

export const fetchComedyMovies = () => ({
  type: FETCH_COMEDY_MOVIES,
});

export const fetchComedyMoviesSuccess = (data) => ({
  type: FETCH_COMEDY_MOVIES_SUCCESS,
  payload: data,
});

export const fetchComedyMoviesError = (message) => ({
  type: FETCH_COMEDY_MOVIES_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_HORROR_MOVIES

export const fetchHorrorMovies = () => ({
  type: FETCH_HORROR_MOVIES,
});

export const fetchHorrorMoviesSuccess = (data) => ({
  type: FETCH_HORROR_MOVIES_SUCCESS,
  payload: data,
});

export const fetchHorrorMoviesError = (message) => ({
  type: FETCH_HORROR_MOVIES_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_ROMANTIC_MOVIES

export const fetchRomanticMovies = () => ({
  type: FETCH_ROMANTIC_MOVIES,
});

export const fetchRomanticMoviesSuccess = (data) => ({
  type: FETCH_ROMANTIC_MOVIES_SUCCESS,
  payload: data,
});

export const fetchRomanticMoviesError = (message) => ({
  type: FETCH_ROMANTIC_MOVIES_ERROR,
  payload: message,
});

// Fetch Netflix Home Screen Rows (Different types of movies) FETCH_DOCUMENTARY_MOVIES

export const fetchDocumentaryMovies = () => ({
  type: FETCH_DOCUMENTARY_MOVIES,
});

export const fetchDocumentaryMoviesSuccess = (data) => ({
  type: FETCH_DOCUMENTARY_MOVIES_SUCCESS,
  payload: data,
});

export const fetchDocumentaryMoviesError = (message) => ({
  type: FETCH_DOCUMENTARY_MOVIES_ERROR,
  payload: message,
});

export const fetchBlogDetails = (data) => ({
  type: FETCH_BLOG_DETAILS,
  payload: data,
});

export const fetchBlogDetailsSuccess = (data) => ({
  type: FETCH_BLOG_DETAILS_SUCCESS,
  payload: data,
});

export const fetchBlogDetailsError = (message) => ({
  type: FETCH_BLOG_DETAILS_ERROR,
  payload: message,
});
