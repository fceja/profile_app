import { SET_ELEMENT_VISIBILITY, AppActionTypes, AppState } from "./Types";

const initialState: AppState = {
    isElementVisible: false
}

export const appReducer = (state = initialState, action: AppActionTypes): AppState => {
    switch (action.type) {
        case SET_ELEMENT_VISIBILITY:
            return { ...state, isElementVisible: action.payload };
        default:
            return state;
    }
}