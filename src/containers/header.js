import {
    connect
} from 'react-redux';

import Header from '../components/header';

import * as Actions from '../actions';

const toggleAuthForm = (e, open) => {
    e.preventDefault();
    return Actions.toggleAuthForm(open);
}

const mapState = state => {
    return {
        authFormIsOpen: state.headerReducer.authFormIsOpen
    }
};

const mapDispatch = dispatch => ({
    toggleAuthForm: (e, open) => dispatch(toggleAuthForm(e, open))
});

export default connect(mapState, mapDispatch)(Header);