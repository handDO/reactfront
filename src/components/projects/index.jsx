import React, { Component, Fragment } from 'react';
import '../../css/projects.css';
import { CSSTransition } from 'react-transition-group';

import Header from '../../containers/Header';

export default class Projects extends Component {
  componentDidMount() {
    document.title = 'HandDO - Заказы';
  }

  render() {
    return (
      <Fragment>
          <Header class="projectheader" />
          <section className="projectsbox wrapper">
              <CSSTransition in={ this.props.isCategoriesOpen } timeout={ 200 } classNames='projectsbox__filter'>
                  <div className="projectsbox__filter">
                      <h2>Категории</h2>
                      { this.props.getCats(this.props.categories) }
                  </div>
              </CSSTransition>
              <div className="projectsbox__projects">
                  <h1>Найдено 192 заказа</h1>
                  { this.props.getProjects(this.props.projects) }
                  <a href="/projects" className="projectsbox__projects-loadmore">Показать ещё</a>
              </div>
              <div className={ `projectsbox__filter-button ${(this.props.isCategoriesOpen) ? 'projectsbox__filter-button-active' : ''}` } onClick={ this.props.toggleCategories }>
                  { (this.props.isCategoriesOpen) ? '' : 'Категории' }
              </div>
          </section>
      </Fragment>
      );
  }
}