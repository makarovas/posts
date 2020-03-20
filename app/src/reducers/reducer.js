import produce from "immer";
import { ADD_COURSE } from "../consts";

const initialState = [{ courses: [] }];

const reducer = produce((state, action) => {
  switch (action.type) {
    case ADD_COURSE:
      state.courses.push(action.payload);
    default:
      return state;
  }
}, initialState);

export default reducer;
