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

export const getTopRated = async () => {
  try {
    const response = await axios.get(apiURL.FETCH_TOP_RATED);
    return response.data;
  } catch (error) {
    error.handleGlobally && error.handleGlobally();
    throw new Error(error);
  }
};
