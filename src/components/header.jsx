import React, { Component } from 'react';
import Menu from './mainpage/menu';
import AuthForm from './mainpage/authform';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authformopen: false
    }
  }

  toogleAuthForm = (e) => {
    e.preventDefault();
    (this.state.authformopen) ?
      document.querySelector('.loginform').attributeStyleMap.set('display', 'none')
      : document.querySelector('.loginform').attributeStyleMap.set('display', 'block');
    this.setState({
      authformopen: !this.state.authformopen
    });
  }

  render() {
    return (<header>
              <Menu/>
              <div className="loginbox"><a href="/login" className="login" onClick={this.toogleAuthForm}>Войти</a>
                <AuthForm/>
              </div>
            </header>);
  }
}