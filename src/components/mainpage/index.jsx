import React, { Fragment, Component } from 'react';

import Search from './search';
import Categories from './categories';
import BestContractors from './bestcontractors';
import Header from '../../containers/Header';

export default class Mainpage extends Component {
  componentDidMount() {
    document.title = 'HandDO';
  }
  render() {
    return (
      <Fragment>
          <Header/>
          <Search/>
          <Categories/>
          <BestContractors/>
      </Fragment>
      );
  }
}