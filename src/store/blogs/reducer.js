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
} from '../actionTypes';

const INIT_STATE = {
  error: '',
  loading: false,
  blogData: {},
  blogDetails: null,
  rowMovies: {},
  netflixOriginals: {},
  trendingMovies: {},
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
        rowMovies: { ...state.rowMovies, netflixOriginals: action.payload },
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
        rowMovies: { ...state.rowMovies, trendingMovies: action.payload },
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
        rowMovies: { ...state.rowMovies, topRatedMovies: action.payload },
        // rowMovies: { ...action.payload },
        // rowMovies: {
        //   ...state.rowMovies,
        //   [action.movieCategory]: action.payload,
        // },
        // rowMovies: { ...state.rowMovies, topRated: action.payload.results },
        error: '',
      };
    case FETCH_TOP_RATED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    //FETCH_ACTION_MOVIES
    case FETCH_ACTION_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_ACTION_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...state.rowMovies, actionMovies: action.payload },
        error: '',
      };
    case FETCH_ACTION_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    //FETCH_COMEDY_MOVIES
    case FETCH_COMEDY_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_COMEDY_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...state.rowMovies, comedyMovies: action.payload },
        error: '',
      };
    case FETCH_COMEDY_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    //FETCH_HORROR_MOVIES
    case FETCH_HORROR_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_HORROR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...state.rowMovies, horrorMovies: action.payload },
        error: '',
      };
    case FETCH_HORROR_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    //FETCH_ROMANTIC_MOVIES
    case FETCH_ROMANTIC_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_ROMANTIC_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...state.rowMovies, romanticMovies: action.payload },
        error: '',
      };
    case FETCH_ROMANTIC_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    //FETCH_DOCUMENTARY_MOVIES
    case FETCH_DOCUMENTARY_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_DOCUMENTARY_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        rowMovies: { ...state.rowMovies, documentaryMovies: action.payload },
        error: '',
      };
    case FETCH_DOCUMENTARY_MOVIES_ERROR:
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
