import {
  ADD_COURSE,
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER
} from "../consts/consts";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}
export function fetchPosts(fetchedPosts) {
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
