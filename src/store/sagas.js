import { all } from 'redux-saga/effects';
import blogSagas from './blogs/saga';

export default function* rootSaga() {
  yield all([blogSagas()]);
}
