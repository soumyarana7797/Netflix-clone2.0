/**
 * This is base URL for api call
 */

export let BASE_URL;
export const API_KEY = '7670d8ed0c6d910e3fca240c5c258d51';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://api.themoviedb.org/3';
} else {
  BASE_URL = 'https://api.themoviedb.org/3';
}

//blogs
export const BLOG_URL = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;

export const FETCH_TRENDING = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const FETCH_NETFLIX_ORIGINALS = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=213`;
export const fetchTopRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const fetActionMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const fetchComedyMovie = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const fetchHorrorMovie = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const fetchRomanticMovie = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const fetchDocumentaries = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;
