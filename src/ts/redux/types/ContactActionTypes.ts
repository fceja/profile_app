export const UPDATE_FORM_INPUT_STATE = "UPDATE_FORM_INPUT_STATE";
export const UPDATE_FORM_IS_VALID = "UPDATE_FORM_IS_VALID";

export type UpdateFormInputState = {
  type: typeof UPDATE_FORM_INPUT_STATE;
  name: string;
  isValid: boolean;
};

export type UpdateFormIsValid = {
  type: typeof UPDATE_FORM_IS_VALID;
  formIsValid: boolean;
};

export type ContactActionTypes = UpdateFormInputState | UpdateFormIsValid;
