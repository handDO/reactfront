import React, { Component } from 'react';

const catNames = [
  'Уборка',
  'Красота и здоровье',
  'Ремонт техники',
  'Работа по дому',
  'Проведение мероприятий',
  'Фото и видео',
  'Транспортные услуги',
  'Образование',
  'Уход за животными',
  'Юридическая помощь',
  'Ремонт и строительство',
  'IT, компьютеры'
];

export default class Categories extends Component {
  render() {
    return (<section className="categoriesbox wrapper"> 
    <h1>Более 1000 исполнителей в различных категориях</h1>
    <div className="categories">
        {this.getCats()}
    </div>
    <a href="/projects" className="allcatsbut">Все категории</a>
     </section>);
  }

  getCats() {
    let cats = catNames.map((val, i) => {
      return (<a href="/" key={i} className="category">{val}</a>);
    });
    return cats;
  }
}