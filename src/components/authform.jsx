import React, { Component } from 'react';

export default class AuthForm extends Component {
  render() {
    return (
      <div className="loginform">
            <form name="auth">
                <input name="email" type="text" placeholder="E-Mail"/>
                <input name="password" type="password" placeholder="Пароль"/>
                <div><input type="button" value="Войти"/>
                <a href="/">Забыли пароль?</a></div>
            </form>
            <div className="delimiter"></div>
            <div className="socialauth">
                Войдите с помощью:
                <div className="socialicons">
                    <div className="googleicon authicon"></div>
                    <div className="vkicon authicon"></div>
                </div>
            </div>
        </div>);
  }
}