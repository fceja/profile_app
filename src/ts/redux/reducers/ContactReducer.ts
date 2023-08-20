import { UPDATE_FORM_ERROR_STATE, ContactAction } from "../types/ContactTypes";

interface ContactState {
  formErrorMessages: {
    name: string;
  };
  formErrorStates: {
    name: boolean;
  };
}

const initialState: ContactState = {
  formErrorMessages: {
    name: "Name Required",
  },
  formErrorStates: {
    name: true,
  },
};

const contactReducer = (
  state = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case UPDATE_FORM_ERROR_STATE:
      return {
        ...state,
        formErrorStates: {
          ...state.formErrorStates,
          [action.name]: action.errorState,
        },
      };

    default:
      return state;
  }
};

export default contactReducer;
