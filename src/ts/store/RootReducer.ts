import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "@pages/contact/ContactReducer";

const rootReducer = combineReducers({
  contactState: contactReducer,
});

export default rootReducer;
