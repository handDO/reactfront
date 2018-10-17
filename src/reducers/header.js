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
                authFormIsOpen: !state.authFormIsOpen
            }
        default:
            return state;
    }
}

export default headerReducer;