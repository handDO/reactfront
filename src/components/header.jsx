import React, { Component } from 'react';
import Menu from './mainpage/menu';
import AuthForm from './mainpage/authform';


export default class Header extends Component {
  render() {
    return (<header>
              <Menu/>
              <div className="loginbox"><a href="/login" className="login" onClick={this.props.toogleAuthForm}>Войти</a>
                <AuthForm/>
              </div>
            </header>);
  }
}