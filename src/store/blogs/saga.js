import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  getBlogDetails,
  getBlogs,
  getNetflixOriginals,
  getTrendingMovies,
  getTopRated,
} from 'services';

import {
  fetchBlogsSuccess,
  fetchBlogsError,
  fetchBlogDetailsSuccess,
  fetchBlogDetailsError,
  fetchNetflixOriginalsSuccess,
  fetchNetflixOriginalsError,
  fetchTrendingMoviesSuccess,
  fetchTrendingMoviesError,
  fetchTopRatedSuccess,
  fetchTopRatedError,
} from 'store/actions';
import {
  FETCH_BLOGS,
  FETCH_BLOG_DETAILS,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_TRENDING_MOVIES,
  FETCH_TOP_RATED,
} from 'store/actionTypes';

function* fetchBlogs() {
  try {
    const userObj = yield call(getBlogs);
    if (!userObj.message) {
      yield put(fetchBlogsSuccess(userObj));
    } else {
      yield put(fetchBlogsError(userObj));
    }
  } catch (error) {
    yield put(fetchBlogsError(error));
  }
}

export function* watchFetchBlogs() {
  yield takeLatest(FETCH_BLOGS, fetchBlogs);
}

//NETFLIX_ORIGINALS
function* fetchNetflixOriginals() {
  try {
    const userObj = yield call(getNetflixOriginals);
    if (!userObj.message) {
      yield put(fetchNetflixOriginalsSuccess(userObj));
    } else {
      yield put(fetchBlogsError(userObj));
    }
  } catch (error) {
    yield put(fetchNetflixOriginalsError(error));
  }
}

export function* watchFetchNetflixOriginals() {
  yield takeLatest(FETCH_NETFLIX_ORIGINALS, fetchNetflixOriginals);
}

//NETFLIX_TRENDING
function* fetchTrendingMovies() {
  try {
    const userObj = yield call(getTrendingMovies);
    if (!userObj.message) {
      yield put(fetchTrendingMoviesSuccess(userObj));
    } else {
      yield put(fetchTrendingMoviesError(userObj));
    }
  } catch (error) {
    yield put(fetchTrendingMoviesError(error));
  }
}

export function* watchFetchTrendingMovies() {
  yield takeLatest(FETCH_TRENDING_MOVIES, fetchTrendingMovies);
}

//TOP_RATED
function* fetchTopRated() {
  try {
    const userObj = yield call(getTopRated);
    if (!userObj.message) {
      yield put(fetchTopRatedSuccess(userObj));
    } else {
      yield put(fetchTopRatedError(userObj));
    }
  } catch (error) {
    yield put(fetchTopRatedError(error));
  }
}

export function* watchFetchTopRated() {
  yield takeLatest(FETCH_TOP_RATED, fetchTopRated);
}

function* fetchBlogDetails({ payload }) {
  try {
    const userObj = yield call(getBlogDetails, payload);
    if (!userObj.message) {
      yield put(fetchBlogDetailsSuccess(userObj));
    } else {
      yield put(fetchBlogDetailsError(userObj));
    }
  } catch (error) {
    yield put(fetchBlogDetailsError(error));
  }
}

export function* watchFetchBlogDetails() {
  yield takeLatest(FETCH_BLOG_DETAILS, fetchBlogDetails);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchBlogs),
    fork(watchFetchBlogDetails),
    fork(watchFetchNetflixOriginals),
    fork(watchFetchTrendingMovies),
    fork(watchFetchTopRated),
  ]);
}
