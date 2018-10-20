import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className="logo"></Link>
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
      return (<Link key={ i } className="menu__link" to={ val.link }>
                  { val.name }
              </Link>);
    });
    return menu;
  }
}