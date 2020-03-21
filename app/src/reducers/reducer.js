import produce from "immer";
import { combineReducers } from "redux";
import { ADD_COURSE, ADD } from "../consts";
import { postReducer } from "./postReducer";

const initialStateOld = [{ courses: [] }];

const reducer = produce((state, action) => {
  switch (action.type) {
    case ADD_COURSE:
      state.courses.push(action.payload);
    default:
      return state;
  }
}, initialStateOld);

const initialState = { posts: [1, 2, 3, 4] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export { reducer };
