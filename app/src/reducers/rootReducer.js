import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import { appReducer } from "./appReducer";

// const initialStateOld = [{ courses: [] }];

// const reducer = produce((state, action) => {
//   switch (action.type) {
//     case ADD_COURSE:
//       state.courses.push(action.payload);
//     default:
//       return state;
//   }
// }, initialStateOld);

// const initialState = { posts: [1, 2, 3, 4] };

const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer
});

export { rootReducer };
