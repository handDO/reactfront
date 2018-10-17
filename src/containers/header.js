import {
    connect
} from 'react-redux';

import Header from '../components/header';

import * as Actions from '../actions';

const toggleAuthForm = (e) => {
    e.preventDefault();
    return Actions.toggleAuthForm();
}

const mapState = state => {
    return {
        authFormIsOpen: state.headerReducer.authFormIsOpen
    }
};

const mapDispatch = dispatch => ({
    toggleAuthForm: e => dispatch(toggleAuthForm(e))
});

export default connect(mapState, mapDispatch)(Header);