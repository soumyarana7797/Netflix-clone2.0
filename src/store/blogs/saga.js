import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  getBlogDetails,
  getBlogs,
  getNetflixOriginals,
  getTrendingMovies,
  getTopRated,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanticMovies,
  getDocumentaryMovies,
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
  fetchActionMoviesSuccess,
  fetchActionMoviesError,
  fetchComedyMoviesSuccess,
  fetchComedyMoviesError,
  fetchHorrorMoviesSuccess,
  fetchHorrorMoviesError,
  fetchRomanticMoviesSuccess,
  fetchRomanticMoviesError,
  fetchDocumentaryMoviesSuccess,
  fetchDocumentaryMoviesError,
} from 'store/actions';
import {
  FETCH_BLOGS,
  FETCH_BLOG_DETAILS,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_TRENDING_MOVIES,
  FETCH_TOP_RATED,
  FETCH_ACTION_MOVIES,
  FETCH_COMEDY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANTIC_MOVIES,
  FETCH_DOCUMENTARY_MOVIES,
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
function* fetchTopRated(action) {
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

//FETCH_ACTION_MOVIES
function* fetchActionMovies(action) {
  try {
    const userObj = yield call(getActionMovies);
    if (!userObj.message) {
      yield put(fetchActionMoviesSuccess(userObj));
    } else {
      yield put(fetchActionMoviesError(userObj));
    }
  } catch (error) {
    yield put(fetchActionMoviesError(error));
  }
}

export function* watchFetchActionMovies() {
  yield takeLatest(FETCH_ACTION_MOVIES, fetchActionMovies);
}

//FETCH_COMEDY_MOVIES
function* fetchComedyMovies(action) {
  try {
    const userObj = yield call(getComedyMovies);
    if (!userObj.message) {
      yield put(fetchComedyMoviesSuccess(userObj));
    } else {
      yield put(fetchComedyMoviesError(userObj));
    }
  } catch (error) {
    yield put(fetchComedyMoviesError(error));
  }
}

export function* watchFetchComedyMovies() {
  yield takeLatest(FETCH_COMEDY_MOVIES, fetchComedyMovies);
}

//FETCH_HORROR_MOVIES
function* fetchHorrorMovies(action) {
  try {
    const userObj = yield call(getHorrorMovies);
    if (!userObj.message) {
      yield put(fetchHorrorMoviesSuccess(userObj));
    } else {
      yield put(fetchHorrorMoviesError(userObj));
    }
  } catch (error) {
    yield put(fetchHorrorMoviesError(error));
  }
}

export function* watchFetchHorrorMovies() {
  yield takeLatest(FETCH_HORROR_MOVIES, fetchHorrorMovies);
}

//FETCH_ROMANTIC_MOVIES
function* fetchRomanticMovies(action) {
  try {
    const userObj = yield call(getRomanticMovies);
    if (!userObj.message) {
      yield put(fetchRomanticMoviesSuccess(userObj));
    } else {
      yield put(fetchRomanticMoviesError(userObj));
    }
  } catch (error) {
    yield put(fetchRomanticMoviesError(error));
  }
}

export function* watchFetchRomanticMovies() {
  yield takeLatest(FETCH_ROMANTIC_MOVIES, fetchRomanticMovies);
}

//FETCH_DOCUMENTARY_MOVIES
function* fetchDocumentaryMovies(action) {
  try {
    const userObj = yield call(getDocumentaryMovies);
    if (!userObj.message) {
      yield put(fetchDocumentaryMoviesSuccess(userObj));
    } else {
      yield put(fetchDocumentaryMoviesError(userObj));
    }
  } catch (error) {
    yield put(fetchDocumentaryMoviesError(error));
  }
}

export function* watchFetchDocumentaryMovies() {
  yield takeLatest(FETCH_DOCUMENTARY_MOVIES, fetchDocumentaryMovies);
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
    fork(watchFetchComedyMovies),
    fork(watchFetchActionMovies),
    fork(watchFetchHorrorMovies),
    fork(watchFetchRomanticMovies),
    fork(watchFetchDocumentaryMovies),
  ]);
}
