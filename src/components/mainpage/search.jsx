import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <section className="searchbox">
        <h1>Поможем найти надёжного исполнителя</h1>
        <h2>для любых задач в г. Сыктывкар</h2>
        <div className="search">
            <input type="text" placeholder="Напишите название услуги"/>
            <input type="button" value="Найти"/>
        </div>
        <div className="example">Например: <a href="/">ремонт холодильника</a></div>
        <h2>или</h2>
        <a href="/profile/createservice" className="addservice">Добавьте свои услуги</a>
      </section>);
  }
}