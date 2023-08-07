export const SET_ELEMENT_VISIBILITY = 'SET_ELEMENT_VISIBILITY';

export interface AppState {
    isElementVisible: boolean;
}

export interface SetElementVisibilityAction {
    type: typeof SET_ELEMENT_VISIBILITY;
    payload: boolean;
}

export type AppActionTypes = SetElementVisibilityAction;