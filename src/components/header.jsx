import React, { Component } from 'react';
import Menu from './menu';

export default class Header extends Component {
  render() {
    return (<header>
              <Menu/>
              <div className="loginbox"><a href="/login" className="login">Войти</a></div>
            </header>);
  }
}