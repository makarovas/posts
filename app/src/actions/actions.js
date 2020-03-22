import {
  ADD_COURSE,
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT
} from "../consts/consts";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function showLoader(text) {
  return {
    type: SHOW_LOADER,
    payload: text
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());
    }, 2000);
  };
}

export function showAlert() {
  return {
    type: SHOW_ALERT
  };
}
export function hidAlert() {
  return {
    type: HIDE_ALERT
  };
}
