import {
  ADD_COURSE,
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS
} from "../consts/consts";

export function createPost(post) {
  console.log("loader createPost");

  return {
    type: CREATE_POST,
    payload: post
  };
}

export function showLoader(text) {
  console.log("loader run");
  return {
    type: SHOW_LOADER,
    payload: text
  };
}

export function hideLoader() {
  console.log("loader close");

  return {
    type: HIDE_LOADER
  };
}

export function fetchPosts() {
  console.log("loader fetchPosts");

  return {
    type: REQUEST_POSTS
  };

  // return async dispatch => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const json = await response.json();
  //     setTimeout(() => {
  //       dispatch({ type: FETCH_POSTS, payload: json });
  //       dispatch(hideLoader());
  //     }, 2000);
  //   } catch (err) {
  //     dispatch(showAlert(err.message));
  //     dispatch(hideLoader());
  //   }
  // };
}

export function hideAlert() {
  console.log("hideAlert");
  return {
    type: HIDE_ALERT
  };
}

export function showAlert(text) {
  console.log("showAlert");

  return dispatch => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}
