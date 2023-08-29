import * as ContactActionTypes from "ts/store/types/ContactActionTypes";

interface InitialState {
  formErrorMessage: string;
  formInputStates: {
    nameIsValid: boolean;
    emailIsValid: boolean;
    messageIsValid: boolean;
  };
  formIsValid: boolean;
}

const initialState: InitialState = {
  formErrorMessage: " - Required",
  formInputStates: {
    nameIsValid: false,
    emailIsValid: false,
    messageIsValid: false,
  },
  formIsValid: false,
};

const contactReducer = (
  state = initialState,
  action: ContactActionTypes.ContactActionTypes
) => {
  switch (action.type) {
    case ContactActionTypes.UPDATE_FORM_INPUT_STATE:
      return {
        ...state,
        formInputStates: {
          ...state.formInputStates,
          [`${action.name}IsValid`]: action.isValid,
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
