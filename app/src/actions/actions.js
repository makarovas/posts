import { ADD_COURSE, CREATE_POST, FETCH_POSTS } from "../consts/consts";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function fetchedPosts(fetchedPosts) {
  return async dispatch => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
  };
}
