import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POSTS } from "../consts";
import { showLoader, hideLoader } from "../actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  yield put(showLoader());
  const payload = yield call(fetchPosts());
  yield put({ type: FETCH_POSTS, payload });
  yield put(hideLoader());
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
    // setTimeout(() => {
    //   dispatch({ type: FETCH_POSTS, payload: json });
    //   dispatch(hideLoader());
    // }, 2000);
  } catch (err) {
    // dispatch(showAlert(err.message));
    // dispatch(hideLoader());
  }
}
