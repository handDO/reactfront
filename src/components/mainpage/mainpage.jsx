import React, { Fragment, Component } from 'react';

import Search from './search';
import Categories from './categories';
import BestContractors from './bestcontractors';

export default class Mainpage extends Component {
  componentDidMount() {
    document.title = 'HandDO';
  }
  render() {
    return (
      <Fragment>
          <Search/>
          <Categories/>
          <BestContractors/>
      </Fragment>
      );
  }
}