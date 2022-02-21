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
} from '../actionTypes';

const INIT_STATE = {
  error: '',
  loading: false,
  blogData: {},
  blogDetails: null,
  rowMovies: {},
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
    //FETCH NETFLIX ORIGINALS
    case FETCH_NETFLIX_ORIGINALS:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_NETFLIX_ORIGINALS_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...action.payload },
        error: '',
      };
    case FETCH_NETFLIX_ORIGINALS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    //FETCH NETFLIX TRENDING
    case FETCH_TRENDING_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...action.payload },
        error: '',
      };
    case FETCH_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    //FETCH FETCH_TOP_RATED
    case FETCH_TOP_RATED:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_TOP_RATED_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...action.payload },
        error: '',
      };
    case FETCH_TOP_RATED_ERROR:
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
