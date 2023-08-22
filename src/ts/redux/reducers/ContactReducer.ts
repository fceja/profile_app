import * as ContactTypes from "../types/ContactTypes";

const initialState: ContactTypes.InitialStateType = {
  formErrorMessage: " - Required",
  formErrorStates: {
    name: true,
    email: true,
    message: true,
  },
  formHasError: true,
};

const contactReducer = (
  state = initialState,
  action: ContactTypes.ContactActionTypes
) => {
  switch (action.type) {
    case ContactTypes.UPDATE_FORM_ERROR_STATE:
      return {
        ...state,
        formErrorStates: {
          ...state.formErrorStates,
          [action.name]: action.errorState,
        },
      };
    case ContactTypes.UPDATE_FORM_HAS_ERROR:
      return {
        ...state,
        formHasError: action.formHasError,
      };
    default:
      return state;
  }
};

export default contactReducer;
