import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(mapState, mapDispatch)(Menu));