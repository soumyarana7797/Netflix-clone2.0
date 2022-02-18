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

// export const FETCH_TRENDING= `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
// fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=213`;
// fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`;
// fetActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`;
// fetchComedyMovie: `discover/movie?api_key=${API_KEY}&with_genres=35`;
// fetchHorrorMovie: `discover/movie?api_key=${API_KEY}&with_genres=27`;
// fetchRomanticMovie: `discover/movie?api_key=${API_KEY}&with_genres=10749`;
// fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`;
