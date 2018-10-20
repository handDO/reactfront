import { connect } from 'react-redux';

import Menu from '../components/mainpage/menu';

import * as Actions from '../actions';

const mapState = state => {
  return {
    menuIsOpen: state.headerReducer.menuIsOpen
  }
};

const mapDispatch = dispatch => ({
  toggleMenu: e => dispatch(Actions.toggleMenu())
});

export default connect(mapState, mapDispatch)(Menu);