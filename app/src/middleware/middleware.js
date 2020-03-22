import { CREATE_POST } from "../consts";
import { showAlert } from "../actions";

const forbidden = ["fuck", "spam", "php"];

export function spamDetectorMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w));
        if (found.length) {
          return dispatch(showAlert("SPAMMER DETECTED"));
        }
      }
      return next(action);
    };
  };
}
