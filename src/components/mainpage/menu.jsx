import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const menuLinks = [
  {
    "name": "Заказы",
    "link": "/projects"
  },
  {
    "name": "Исполнители",
    "link": "/contractors"
  }
];

export default class Menu extends Component {
  render() {
    return (<section className="menu">
                <NavLink to="/" className="logo" exact></NavLink>
                <div className="menu__mobilebarbutton" onClick={ this.props.toggleMenu }></div>
                <CSSTransition in={ this.props.menuIsOpen } timeout={ 200 } classNames="menu__links">
                    <div className="menu__links">
                        { this.getMenuLinks() }
                    </div>
                </CSSTransition>
            </section>);
  }

  getMenuLinks() {
    let menu = menuLinks.map((val, i) => {
      return (<NavLink key={ i } to={ val.link } className="menu__link" activeClassName="menu__link_active">
                  { val.name }
              </NavLink>);
    });
    return menu;
  }
}