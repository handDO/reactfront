import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Projects from '../components/projects';
import Project from '../components/projects/project';
const getCats = categories => categories.map((val, i) => ( <a href="/" key={ i } className="category">
                                                               { val }
                                                           </a>));

const getProjects = projects => projects.map((val, i) => ( <Project key={ i } val={ val } />));

const mapState = state => ({
  projects: state.projectsReducer.projects,
  categories: state.projectsReducer.categories,
  isCategoriesOpen: state.projectsReducer.isCategoriesOpen,
  getCats: getCats,
  getProjects: getProjects,
  isFetching: state.projectsReducer.isFetching
});

const mapDispatch = dispatch => ({
  toggleCategories: e => dispatch(Actions.toggleCategories(e)),
  fetchOrdersIfNeeded: e => dispatch(Actions.fetchOrdersIfNeeded())
});
export default connect(mapState, mapDispatch)(Projects);