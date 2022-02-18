import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  FETCH_BLOG_DETAILS,
  FETCH_BLOG_DETAILS_SUCCESS,
  FETCH_BLOG_DETAILS_ERROR,
} from '../actionTypes';

const INIT_STATE = {
  error: '',
  loading: false,
  blogData: {},
  blogDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogData: { ...action.payload },
        error: '',
      };
    case FETCH_BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case FETCH_BLOG_DETAILS:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_BLOG_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogDetails: { ...action.payload },
        error: '',
      };
    case FETCH_BLOG_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return { ...state };
  }
};

export default reducer;
