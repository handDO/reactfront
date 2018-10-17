import React, { Component } from 'react';
import './css/projects.css';

const proj = [
  {
    id: 1,
    user_id: 1,
    user_rating: 154,
    user_name: "Андрей",
    title: "Нужен велосипед",
    price: "до 1000 руб.",
    before_date: new Date(2018, 9, 10)
  },
  {
    id: 1,
    user_id: 2,
    user_rating: 119,
    user_name: "Василий",
    title: "Нужно собрать поликарбонатную теплицу",
    price: "до 5000 руб.",
    before_date: new Date(2018, 10, 21)
  },
  {
    id: 1,
    user_id: 1,
    user_rating: 154,
    user_name: "Андрей",
    title: "Написать курсовую работу за 4 курс",
    price: "2000 руб.",
    before_date: new Date(2018, 11, 30)
  },
  {
    id: 1,
    user_id: 1,
    user_rating: 154,
    user_name: "Андрей",
    title: "Написать курсовую работу за 4 курс",
    price: "2000 руб.",
    before_date: new Date(2018, 11, 30)
  }
];

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

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catsOpen: false
    }
  }

  getProjects = () => {
    return proj.map((val, i) => (
      <div key={i} className="projectsbox__project">
        <div>
            <div className="projectsbox__project-title"><a href={`/projects/${val.id}`}>{val.title}</a></div>
            <div className="projectsbox__project-user">
                <div className="projectsbox__project-username"><a href={`/profile/${val.user_id}`}>{val.user_name}</a></div>
                <div className="projectsbox__project-rating">{val.user_rating}</div>
            </div>
            
        </div>
        <div><div className="projectsbox__project-price">{val.price}</div><div className="projectsbox__project-date">до {val.before_date.toLocaleString('ru', {
        month: 'long',
        day: 'numeric'
      })}</div></div>
        
      </div>
    ));
  }

  getCats = () => {
    let cats = catNames.map((val, i) => {
      return (<a href="/" key={i} className="category">{val}</a>);
    });
    return cats;
  }

  closeCats = (e) => {
    this.setState(
      {
        catsOpen: !this.state.catsOpen
      }
    );

  }


  render() {
    return (
      <section className="projectsbox wrapper">
        <div className="projectsbox__filter" style={{
        display: (this.state.catsOpen) ? 'block' : 'none'
      }}>
          <h2>Категории</h2>
          {this.getCats()}
          <div className="projectsbox__filter-close" onClick={this.closeCats}></div>
        </div>
        <div className="projectsbox__projects">
        <h1>
            Найдено 192 заказа
        </h1>
        {this.getProjects()}
        
      </div>
      <div className="projectsbox__filterbutton" onClick={this.closeCats}>Категории</div>
      </section>
      );
  }
}