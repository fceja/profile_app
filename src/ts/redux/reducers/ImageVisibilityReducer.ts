import {
  SET_ELEMENT_VISIBILITY,
  AppActionTypes,
  AppState,
} from "../types/Types";

const initialState: AppState = {
  isElementVisible: false,
};

export const imageVisibilityReducer = (
  state = initialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case SET_ELEMENT_VISIBILITY:
      return { ...state, isElementVisible: action.payload };
    default:
      return state;
  }
};
