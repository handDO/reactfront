import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import initStore from './reducers/initStore';
import Route from 'react-router-dom/Route';

const store = createStore(initStore, composeWithDevTools(applyMiddleware(thunkMiddleware)));

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