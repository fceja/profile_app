export const UPDATE_FORM_ERROR_STATE = "UPDATE_FORM_ERROR_STATE";
export const UPDATE_FORM_IS_VALID = "UPDATE_FORM_IS_VALID";

export type UpdateFormErrorState = {
  type: typeof UPDATE_FORM_ERROR_STATE;
  name: string;
  errorState: boolean;
};

export type UpdateFormIsValid = {
  type: typeof UPDATE_FORM_IS_VALID;
  formIsValid: boolean;
};

export type ContactActionTypes = UpdateFormErrorState | UpdateFormIsValid;
