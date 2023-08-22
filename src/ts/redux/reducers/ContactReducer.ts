import * as ContactActionTypes from "../types/ContactActionTypes";

export interface InitialState {
  formErrorMessage: string;
  formErrorStates: {
    name: boolean;
    email: boolean;
    message: boolean;
  };
  formHasError: boolean;
}

const initialState: InitialState = {
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
  action: ContactActionTypes.ContactActionTypes
) => {
  switch (action.type) {
    case ContactActionTypes.UPDATE_FORM_ERROR_STATE:
      return {
        ...state,
        formErrorStates: {
          ...state.formErrorStates,
          [action.name]: action.errorState,
        },
      };
    case ContactActionTypes.UPDATE_FORM_HAS_ERROR:
      return {
        ...state,
        formHasError: action.formHasError,
      };
    default:
      return state;
  }
};

export default contactReducer;
