import {
    connect
} from 'react-redux';

import App from '../components/App';

import * as Actions from '../actions';

const appClickHandle = (e, open) => {
    let parent = e.target;
    while (parent.id !== 'root') {
        if (parent.classList.contains('loginform')) return false;
        parent = parent.parentNode;
    }
    if (parent.id === 'root' && this.props.authFormIsOpen === true) return this.props.toggleAuthForm();
}

const mapState = state => {
    return {
        authFormIsOpen: state.headerReducer.authFormIsOpen
    }
};

const mapDispatch = dispatch => ({
    toggleAuthForm: e => dispatch(Actions.toggleAuthForm(e))
});

export default connect(mapState, mapDispatch)(App);