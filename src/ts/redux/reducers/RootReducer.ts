import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./ContactReducer";
import { imageVisibilityReducer } from "./ImageVisibilityReducer";

export const rootReducer = combineReducers({
  imageVisibilityReducer,
  contactState: contactReducer,
});
