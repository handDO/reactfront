import React, { Component } from 'react';

const menuLinks = [
  {
    "name": "Заказы",
    "link": "/projects"
  },
  {
    "name": "Исполнители",
    "link": "/persons"
  }
];


export default class Menu extends Component {
  render() {
    return (<div className="menu">
              <div className="logo"></div>
              { this.getMenuLinks() }
            </div>);
  }
  getMenuLinks() {
    let menu = menuLinks.map((val, i) => {
      return (<a key={i} href={val.link}>
                { val.name }
              </a>);
    });
    return menu;
  }
}