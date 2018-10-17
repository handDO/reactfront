import {
    connect
} from 'react-redux';

import Projects from '../components/projects/projects';

const mapState = state => ({
    projects: state.projectsReducer.projects,
    categories: state.projectsReducer.categories
});

const mapDispatch = dispatch => ({

});

export default connect(mapState, mapDispatch)(Projects);