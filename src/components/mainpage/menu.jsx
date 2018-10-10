import React, { Component } from 'react';

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
              <a href="/"><div className="logo"></div></a>
              { this.getMenuLinks() }
            </section>);
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