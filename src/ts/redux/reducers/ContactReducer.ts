import * as ContactActionTypes from "../types/ContactActionTypes";

export interface InitialState {
  formErrorMessage: string;
  formErrorStates: {
    name: boolean;
    email: boolean;
    message: boolean;
  };
  formIsValid: boolean;
}

const initialState: InitialState = {
  formErrorMessage: " - Required",
  formErrorStates: {
    name: true,
    email: true,
    message: true,
  },
  formIsValid: true,
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
    case ContactActionTypes.UPDATE_FORM_IS_VALID:
      return {
        ...state,
        formIsValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export default contactReducer;
