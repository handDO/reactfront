import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import initStore from './reducers/initStore';
import Route from 'react-router-dom/Route';

const store = createStore(initStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
          <BrowserRouter>
              <Route path="/" component={ App } />
          </BrowserRouter>
      </Provider>
      );
  }
}