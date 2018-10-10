import React, { Component } from 'react';
import Menu from './mainpage/menu';
import AuthForm from './authform';
import { CSSTransition } from 'react-transition-group';


export default class Header extends Component {
  render() {
    return (<header className={this.props.class ? `${this.props.class} wrapper` : 'wrapper'}>
              <Menu/>
              <div className="loginbox">
                <a href="/login" className="login" onClick={this.props.toogleAuthForm}>Войти</a>
                <CSSTransition in={this.props.authformopen} timeout={100} classNames="loginform" unmountOnExit>
                  <AuthForm />
                </CSSTransition>
                
              </div>
            </header>);
  }
}