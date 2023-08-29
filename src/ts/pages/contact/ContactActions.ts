import * as ContactActionTypes from "ts/pages/contact/ContactActionTypes";

export const updateFormInputState = (
  name: string,
  isValid: boolean
): ContactActionTypes.UpdateFormInputState => ({
  type: ContactActionTypes.UPDATE_FORM_INPUT_STATE,
  name: name,
  isValid: isValid,
});

export const UpdateFormIsValid = (
  formIsValid: boolean
): ContactActionTypes.UpdateFormIsValid => ({
  type: ContactActionTypes.UPDATE_FORM_IS_VALID,
  formIsValid: formIsValid,
});