import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getBlogDetails, getBlogs } from 'services';

import {
  fetchBlogsSuccess,
  fetchBlogsError,
  fetchBlogDetailsSuccess,
  fetchBlogDetailsError,
} from 'store/actions';
import { FETCH_BLOGS, FETCH_BLOG_DETAILS } from 'store/actionTypes';

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
  yield all([fork(watchFetchBlogs), fork(watchFetchBlogDetails)]);
}
