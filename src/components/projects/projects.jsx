import React, { Component } from 'react';
import './css/projects.css';
import { CSSTransition } from 'react-transition-group';

export default class Projects extends Component {
  componentDidMount() {
    document.title = 'HandDO - Проекты';
  }

  render() {
    return (
      <section className="projectsbox wrapper">
          <CSSTransition in={ this.props.isCategoriesOpen } timeout={ 1000 } classNames='projectsbox__filter'>
              <div className="projectsbox__filter">
                  <h2>Категории</h2>
                  { this.props.getCats(this.props.categories) }
              </div>
          </CSSTransition>
          <div className="projectsbox__projects">
              <h1>Найдено 192 заказа</h1>
              { this.props.getProjects(this.props.projects) }
          </div>
          <div className={ `projectsbox__filter-button ${(this.props.isCategoriesOpen) ? 'projectsbox__filter-button-active' : ''}` } onClick={ this.props.toggleCategories }>
              { (this.props.isCategoriesOpen) ? '' : 'Категории' }
          </div>
      </section>
      );
  }
}