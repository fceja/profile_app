import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./ContactReducer";
import myGalleryReducer from "./MyGalleryReducer";

const rootReducer = combineReducers({
  myGalleryState: myGalleryReducer,
  contactState: contactReducer,
});

export default rootReducer;
