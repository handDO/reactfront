import {
    TOGGLE_AUTH_FORM,
    TOGGLE_MENU
} from '../actions';

const headerInititalState = {
    authFormIsOpen: false,
    menuIsOpen: false
}

const headerReducer = (state = headerInititalState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH_FORM:
            return {
                ...state,
                authFormIsOpen: !state.authFormIsOpen
            }
        case TOGGLE_MENU:
            return {
                ...state,
                menuIsOpen: !state.menuIsOpen
            }
        default:
            return state;
    }
}

export default headerReducer;