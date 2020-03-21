import { ADD_COURSE, CREATE_POST } from "../consts/consts";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}
