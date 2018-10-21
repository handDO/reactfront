import {
    connect
} from 'react-redux';

import App from '../components/App';

import * as Actions from '../actions';

const mapState = state => {
    return {
        authFormIsOpen: state.headerReducer.authFormIsOpen
    }
};

const mapDispatch = dispatch => ({
    toggleAuthForm: e => dispatch(Actions.toggleAuthForm(e)),
    closeAllDropMenu: e => dispatch(Actions.closeAllDropMenu())
});

export default connect(mapState, mapDispatch)(App);