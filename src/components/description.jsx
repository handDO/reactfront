import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    return (
      <div className="description">
      <h1>Поможем найти надёжного исполнителя</h1>
      <h2>для любых задач в г. Сыктывкар</h2>
        <div className="search">
            <input type="text" placeholder="Напишите название услуги"/>
            <input type="button" value="Найти заказ"/>
        </div>
        <div className="example">Например: <a href="/">ремонт холодильника</a></div>
      </div>);
  }
}