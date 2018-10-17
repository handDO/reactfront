import React, { Component } from 'react';
import './css/projects.css';

export default class Projects extends Component {
  getProjects = () => {
    return this.props.projects.map((val, i) => (
      <div key={ i } className="projectsbox__project">
          <div>
              <div className="projectsbox__project-title">
                  <a href={ `/projects/${val.id}` }>
                      { val.title }
                  </a>
              </div>
              <div className="projectsbox__project-user">
                  <div className="projectsbox__project-username">
                      <a href={ `/profile/${val.user_id}` }>
                          { val.user_name }
                      </a>
                  </div>
                  <div className="projectsbox__project-rating">
                      { val.user_rating }
                  </div>
              </div>
          </div>
          <div>
              <div className="projectsbox__project-price">
                  { val.price }
              </div>
              <div className="projectsbox__project-date">до
                  { val.before_date.toLocaleString('ru', {
                      month: 'long',
                      day: 'numeric'
                    }) }
              </div>
          </div>
      </div>
    ));
  }

  getCats = () => {
    let cats = this.props.categories.map((val, i) => {
      return (<a href="/" key={ i } className="category">
                  { val }
              </a>);
    });
    return cats;
  }

  render() {
    return (
      <section className="projectsbox wrapper">
          <div className="projectsbox__filter" style={ {
 display: (this.props.isCategoriesOpen) ? 'block' : 'none'
 } }>
              <h2>Категории</h2>
              { this.getCats() }
              <div className="projectsbox__filter-close" onClick={ this.props.toggleCategories }></div>
          </div>
          <div className="projectsbox__projects">
              <h1>Найдено 192 заказа</h1>
              { this.getProjects() }
          </div>
          <div className="projectsbox__filterbutton" onClick={ this.props.toggleCategories }>Категории</div>
      </section>
      );
  }
}