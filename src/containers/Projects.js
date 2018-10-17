import {
    connect
} from 'react-redux';

import * as Actions from '../actions';
import Projects from '../components/projects/projects';

const mapState = state => ({
    projects: state.projectsReducer.projects,
    categories: state.projectsReducer.categories,
    isCategoriesOpen: state.projectsReducer.isCategoriesOpen
});

const mapDispatch = dispatch => ({
    toggleCategories: e => dispatch(Actions.toggleCategories(e))
});

export default connect(mapState, mapDispatch)(Projects);