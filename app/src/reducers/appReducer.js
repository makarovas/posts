import { SHOW_LOADER, HIDE_LOADER } from "../consts";

const initialState = { loading: false, alert: null };

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
