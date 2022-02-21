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
