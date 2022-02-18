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
