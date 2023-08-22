import * as ContactActionTypes from "../types/ContactActionTypes";

export const UpdateFormErrorState = (
  name: string,
  errorState: boolean
): ContactActionTypes.UpdateFormErrorState => ({
  type: ContactActionTypes.UPDATE_FORM_ERROR_STATE,
  name: name,
  errorState: errorState,
});

export const UpdateFormIsValid = (
  formIsValid: boolean
): ContactActionTypes.UpdateFormIsValid => ({
  type: ContactActionTypes.UPDATE_FORM_IS_VALID,
  formIsValid: formIsValid,
});
