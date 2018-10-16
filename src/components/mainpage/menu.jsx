import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/"><div className="logo"></div></Link>
              { this.getMenuLinks() }
            </section>);
  }
  getMenuLinks() {
    let menu = menuLinks.map((val, i) => {
      return (<Link key={i} to={val.link}>
                { val.name }
              </Link>);
    });
    return menu;
  }
}