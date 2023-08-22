export const UPDATE_FORM_ERROR_STATE = "UPDATE_FORM_ERROR_STATE";
export const UPDATE_FORM_HAS_ERROR = "UPDATE_FORM_HAS_ERROR";

export interface InitialState {
  formErrorMessage: string;
  formErrorStates: {
    name: boolean;
    email: boolean;
    message: boolean;
  };
  formHasError: boolean;
}
export type InitialStateType = InitialState;

export interface UpdateFormErrorState {
  type: typeof UPDATE_FORM_ERROR_STATE;
  name: string;
  errorState: boolean;
}
export type UpdateFormErrorStateType = UpdateFormErrorState;



export interface UpdateFormHasError {
  type: typeof UPDATE_FORM_HAS_ERROR;
  formHasError: boolean;
}
export type UpdateFormHasErrorType = UpdateFormHasError;

export type ContactActionTypes =
  | UpdateFormErrorStateType
  | UpdateFormHasErrorType;
