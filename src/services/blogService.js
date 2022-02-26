import axios from 'axios';
import * as apiURL from './apiConfig';

export const getBlogs = async () => {
  try {
    const response = await axios.get(apiURL.BLOG_URL);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getBlogDetails = async ({ id }) => {
  try {
    const response = await axios.get(`${apiURL.BLOG_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getNetflixOriginals = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_NETFLIX_ORIGINALS);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_TRENDING);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

// export const getTopRated = async (movieCategory) => {
//   console.log('movieCategory: ', movieCategory);
//   let fetchApi = null;
//   switch (movieCategory) {
//     case 'CAT_TOP_RATED':
//       fetchApi = 'FETCH_TOP_RATED';
//       break;
//     case 'CAT_ACTION_MOVIES':
//       fetchApi = 'FETCH_ACTION_MOVIES';
//       break;
//     case 'CAT_COMEDY_MOVIES':
//       fetchApi = 'FETCH_COMEDY_MOVIES';
//       break;
//     case 'CAT_HORROR_MOVIES':
//       fetchApi = 'FETCH_HORROR_MOVIES';
//       break;
//     case 'CAT_ROMANTIC_MOVIES':
//       fetchApi = 'FETCH_ROMANTIC_MOVIES';
//       break;
//     case 'CAT_DOCUMENTARY_MOVIES':
//       fetchApi = 'FETCH_DOCUMENTARY_MOVIES';
//       break;
//   }
//   try {
//     console.log('apiURL[fetchApi]: ', apiURL[fetchApi]);
//     const response = await axios.get(apiURL[fetchApi]);
//     console.log('response: ', response.data);
//     return response.data;
//   } catch (error) {
//     error.handleGlobally && error.handleGlobally();
//     throw new Error(error);
//   }
// };

export const getTopRated = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_TOP_RATED);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getActionMovies = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_ACTION_MOVIES);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getComedyMovies = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_COMEDY_MOVIES);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getHorrorMovies = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_HORROR_MOVIES);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getRomanticMovies = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_ROMANTIC_MOVIES);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};

export const getDocumentaryMovies = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_DOCUMENTARY_MOVIES);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};
