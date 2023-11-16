import { combineReducers } from "@reduxjs/toolkit";

import contactReducer from "@pages/contactPage/ContactPageReducer";

const rootReducer = combineReducers({
  contactState: contactReducer,
});

export default rootReducer;
