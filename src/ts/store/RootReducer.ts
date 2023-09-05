import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "../pages/contact/ContactReducer";
import myGalleryReducer from "../pages/myGallery/MyGalleryReducer";

const rootReducer = combineReducers({
  myGalleryState: myGalleryReducer,
  contactState: contactReducer,
});

export default rootReducer;
