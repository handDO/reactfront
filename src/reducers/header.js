import {
    TOGGLE_AUTH_FORM
} from '../actions';

const headerInititalState = {
    authFormIsOpen: false
}

const headerReducer = (state = headerInititalState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH_FORM:
            return {
                ...state,
                authFormIsOpen: action.payload
            }
        default:
            return state;
    }
}

export default headerReducer;